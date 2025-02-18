import { person, navItems } from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    title: "dinosaurs around the world",
    message: "Welcome to the world of dinosaurs",
    navItems,
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    message: "We're a group of dinosaur enthusiasts!",
    team: [
      "T-Rex",
      "Velociraptor",
      "Stegosaurus",
      "<strong>Premium</strong> Diplodocus",
    ],
    navItems,
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "Contact us at 09 000 00 00",
    person,
    navItems,
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Police",
    message: "Dinosaurs are protective of their privacy",
    team: false,
    navItems,
  });
};
