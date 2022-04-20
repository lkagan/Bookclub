const router = require("express").Router();
const Book = require("../models/Book.model");
const axios = require("axios");
const Bookclub = require("../models/Bookclub.model");

//My bookclubs get route
router.get("/my-bookclubs", (req, res, next) => {
  Bookclub.find()
    .then((bookclubs) => {
      res.render("clubs/my-bookclubs", { bookclubs });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Create a Bookclubs route
router.get("/create-bookclub", (req, res, next) => {
  res.render("clubs/create-bookclub");
});

//Post create bookclub route
router.post("/create-bookclub", (req, res, next) => {
  const { name, description, book } = req.body;
  Bookclub.create({
    name,
    description,
    book,
  })
    .then(() => {
      res.redirect("/clubs/my-bookclubs");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
