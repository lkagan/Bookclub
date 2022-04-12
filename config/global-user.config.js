module.exports = (req, res, next) => {
    console.log(req.session.currentUser)
    // in a moment when user logs in, we save user object inside req.session
    // this currentUser is then available in any route where we have access to "request"
    res.locals.userInSession = req.session.currentUser;
    console.log("hi", res.locals.userInSession)
    // userInSession now became a global variable

    next();
}
