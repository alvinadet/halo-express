const NOTES = [
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

module.exports = {
  getAll: getAll
};
