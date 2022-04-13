const isLoggedIn = require("../middleware/isLoggedIn");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/details", (req, res, next) => {
  res.render("page-details");
})

router.get("/contact", (req, res, next) => {
  res.render("contact");
})

// router.get("/profile", isLoggedIn, (req, res, next) => {
router.get("/profile", (req, res, next) => {
  res.render("profile");
})



module.exports = router;
