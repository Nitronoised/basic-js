module.exports = function dateSample(sampleActivity) {
  const A0 = 15;
  const T_HALF = 5730;
  const in2 = 0.693;
  const A = parseInt(sampleActivity);
  const K = in2 / T_HALF;
  if (typeof sampleActivity === 'string' && A && A <= 15 && A > 0) {
    return Math.ceil(Math.log(A0 / A) / K)
  } else {
    return false
  }
};
