// import statements
import express from "express";
import path from "path";

import { home, about, contact, privacy } from "./controllers/PageController.js";

// create an instance of express
const app = express();

//set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

//page routes
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);

// GET route to serve the home.ejs file
app.get("/", (req, res) => {
  res.render("home", {
    title: "Dinosaurs are awesome!",
    content: "Dinosaurs are a diverse group of reptiles of the clade Dinosaur",
  });
});

app.get("/about", (req, res) => {
  res.render("home", {
    title: "About",
    content: "this is a page about dinosaurs",
  });
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
