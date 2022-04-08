const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

module.exports = (app) => { // app is a placeholder

    app.set('trust proxy', 1) // important in deployment

    app.use(
        session({
        secret: process.env.SESS_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 60000 // 60 * 1000 ms === 1 min
            }
        })
    );
};
