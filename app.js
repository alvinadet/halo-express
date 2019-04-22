const express = require("express");
const router = require("./routes/router.js");
const app = express();

//static Files
app.use(express.static("public"));

//setup Views
app.set("view engine", "ejs");

//setup Routes
app.use(router);

//setup Helpers
app.locals.noteAge = require("./util/helpers.js").noteAge;

module.exports = app;
