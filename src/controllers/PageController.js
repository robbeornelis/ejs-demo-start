export const home = (req, res) => {
  res.render("home", {
    title: "dinosaurs around the world",
    message: "Welcome to the world of dinosaurs",
  });
};

export const about = (req, res) => {
  res.render("about", {
    title: "about us",
    message: "we're a group of dinosaur enthusiasts",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "contact",
    message: "contact us at 09 000 00 00",
  });
};

export const privacy = (req, res) => {
  res.render("privacy", {
    title: "Privacy Police",
    message: "Dinosaurs are protective of their privacy",
  });
};
