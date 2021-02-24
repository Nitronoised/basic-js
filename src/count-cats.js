
module.exports = function countCats(matrix) {
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].map(e => (e === '^^') && array.push(e))
  }
  return array.length
};
