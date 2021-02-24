
module.exports = function getSeason(date) {
  if (typeof date !== 'object' || date === null) { return 'Unable to determine the time of year!' }
  if (!date) { throw new Error }
  if (date.getMilliseconds() <= 12 && date.getMilliseconds() !== 2) { throw new Error }
  let month = date.getMonth();
  if (month < 2 || month >= 11) { return 'winter' }
  if (month >= 2 && month < 5) { return 'spring' }
  if (month >= 5 && month < 8) { return 'summer' }
  if (month >= 8 && month < 11) { return 'fall' }
};

