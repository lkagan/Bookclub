const router = require("express").Router();
const Book = require("../models/Book.model");
const axios = require("axios");

//My bookclubs get route
router.get("/my-bookclubs", (req, res, next) => {
    res.render("clubs/my-bookclubs");
})

//Create a Bookclubs route
router.get("/create-bookclub", (req, res, next) => {
    res.render("clubs/create-bookclub");
})

//Post create bookclub route 
router.post("/create-bookclub", (req, res, next) => {
    const {name, description, book} = req.body;

    res.render("clubs/my-bookclubs");
})
  
module.exports = router;