const express = require("express");
const layout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const router = require("./routes/router.js");

const app = express();

//form Stuff
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//static Files
app.use(express.static("public"));
app.use(layout);

//setup Views
app.set("view engine", "ejs");

//setup Routes
app.use(router);

//setup Helpers
app.locals.noteAge = require("./util/helpers.js").noteAge;

module.exports = app;
