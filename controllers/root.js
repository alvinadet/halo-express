const { getAll } = require("../models/note.js");

function index(req, res) {
  const notes = getAll();
  res.render("index", { notes: notes });
}

function echo(req, res) {
  const { name } = req.params;
  res.render("index", { text: `Halo ${name}` });
}

module.exports = {
  index: index,
  echo: echo
};
