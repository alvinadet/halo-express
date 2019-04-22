let NOTES = [
  {
    id: 1,
    title: "How to learn Node.js",
    body: "This is my notes on how to learn Node.js",
    created_at: new Date("2019-02-22")
  },
  {
    id: 2,
    title: "Talk is cheap",
    body: "Talk is cheap. Show me the code!",
    created_at: new Date("2018-12-25")
  }
];

function getAll() {
  return NOTES;
}

function add(data) {
  const newData = data;
  newData["id"] = NOTES.length - 1;
  NOTES.push(newData);
  return NOTES;
}

function get(id) {
  const notes = NOTES.filter(function(note) {
    return note.id === parseInt(id);
  });
  return notes[0];
}

function update(id, data) {
  // delete current note
  const newNotes = NOTES.filter(function(note) {
    return note.id !== parseInt(id);
  });
  NOTES = newNotes;

  // add new note
  const newNote = data;
  newNote.id = parseInt(id);
  newNote.created_at = new Date();
  NOTES.push(newNote);
  return NOTES[id];
}

function remove(id) {
  NOTES = NOTES.filter(function(note) {
    return note.id !== parseInt(id);
  });

  return NOTES;
}

module.exports = {
  getAll: getAll,
  add: add,
  get: get,
  update: update,
  remove: remove
};
