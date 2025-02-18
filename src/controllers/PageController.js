export const home = (req, res) => {
  res.render("pages/home", {
    title: "dinosaurs around the world",
    message: "Welcome to the world of dinosaurs",
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    message: "We're a group of dinosaur enthusiasts!",
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    message: "Contact us at 09 000 00 00",
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Police",
    message: "Dinosaurs are protective of their privacy",
  });
};
