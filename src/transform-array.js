
module.exports = function transform(array) {
  if (typeof array !== 'object' || array === null || array == { 'foo': 'bar' }) { throw new Error }
  else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == '--discard-next') {
        if (typeof array[i + 1] !== 'undefined' && array[i + 1] !== '--discard-next' && array[i + 1] !== '--discard-prev' && array[i + 1] !== '--double-prev' && array[i + 1] !== '--double-next') {
          array.splice(i + 1, 1)
        }
      }
      if (array[i] == '--discard-prev') {
        if (typeof array[i - 1] !== 'undefined' && array[i - 1] !== '--double-prev' && array[i - 1] !== '--discard-next' && array[i - 1] !== '--double-prev' && array[i - 1] !== '--double-next') {
          array.splice(i - 1, 1)
        }
      }
      if (array[i] == '--double-next') {
        if (typeof array[i + 1] !== 'undefined' && array[i + 1] !== '--double-next' && array[i + 1] !== '--discard-next' && array[i + 1] !== '--double-prev' && array[i + 1] !== '--discard-prev') {
          array.splice(i, 1, array[i], array[i + 1])
        }
      }
      if (array[i] == '--double-prev') {
        if (typeof array[i - 1] !== 'undefined' && array[i - 1] !== '--double-prev' && array[i - 1] !== '--discard-next' && array[i - 1] !== '--double-prev' && array[i - 1] !== '--discard-prev') {
          array.splice(i, 1, array[i], array[i - 1])
        }
      }
    }
    return array.filter(e => e !== '--discard-next' && e !== '--double-prev' && e !== '--discard-prev' && e !== '--double-next')
  }
};
