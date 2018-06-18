const calculateStylePoints = styleNotes => {
  let sortStyleNotes = styleNotes.sort();
  sortStyleNotes.shift();
  sortStyleNotes.pop();

  return sortStyleNotes.reduce(function(a, b) {
    return a + b;
  });
};

module.exports = calculateStylePoints;
