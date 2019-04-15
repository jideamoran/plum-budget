const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const config = require('./config');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 5000;
//app.use('/src', express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'I am a keyboard cat running in the ravioli',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(config.getDbConnectionString());
apiController(app);


app.listen(port, () => console.log(`Listening on port ${port}`));