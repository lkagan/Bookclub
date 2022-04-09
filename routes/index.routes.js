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

module.exports = router;
