
module.exports = function createDreamTeam(matrix) {
  let array = [];
  let selected = [];
  if (typeof matrix !== 'object' || matrix == null || matrix.length < 2) { return false }
  if (typeof matrix == 'object') {
    for (let i = 0; i < matrix.length; i++) {
      if (typeof matrix[i] === 'string') {
        array.push(matrix[i].split('').filter(e => e !== ' '))
      }
    }
    array.map(e => selected.push(e[0]))
    let result = selected.map(e => e.toString().toLocaleUpperCase()).sort().join('');
    return result.length > 0 ? result : false;
  }
};
