const isLoggedIn = require('../middleware/isLoggedIn');

const router = require('express').Router();

const cloudinary = require("../config/cloudinary.config");

const User = require("../models/User.model");



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

router.post('/profile', cloudinary.single("profile-picture"), (req, res, next) => {
    console.log(req.file.path);
    User.findByIdAndUpdate(req.session.currentUser._id, {profilePicture: req.file.path}, {new: true})
    .then(updatedUser => {
        req.session.currentUser = updatedUser;
        res.redirect('/profile');
    })
    .catch(err => {
        console.log(err)
        next(err);
    });
});



module.exports = router;
