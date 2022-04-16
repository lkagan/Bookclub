const isLoggedIn = require('../middleware/isLoggedIn');

const router = require('express').Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

//Details page get route
router.get('/details', (req, res, next) => {
    res.render('page-details');
});

//Contact page get route
router.get('/contact', (req, res, next) => {
    res.render('contact');
});

// router.get("/profile", isLoggedIn, (req, res, next) => {
router.get('/profile', (req, res, next) => {
    res.render('profile');
});

//get route for thank you page
router.post('/thanks-page', (req, res, next) => {
    res.render('thanks-page');
});

module.exports = router;
