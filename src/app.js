// import statements
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import * as pages from "./controllers/PageController.js";
import * as pages from "./controllers/DinoController.js";

import helpers from "./utils/templatehelpers.js";
// create an instance of express
const app = express();

// use express layouts
app.use(expressLayouts);
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

//Make the helpers available for to all views
Object.assign(app.locals, helpers);

app.use(express.static("public"));
// page routes
app.get("/", pages.home);
app.get("/about", pages.about);
app.get("/contact", pages.contact);
app.get("/privacy", pages.privacy);

//dino routes
app.get("/dinosaurs", dinosaurs.index);
app.get("./dinosaurs/:slug", dinosaurs.detail);

// 404 page
app.get("*", (req, res) => {
  res.status(404).render("errors/404", {
    layout: "layouts/error", // override the default layout
  });
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
