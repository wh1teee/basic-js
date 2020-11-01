const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const value = parseFloat(sampleActivity)

  if (isNaN(value)) {
    return false;
  }
  if (value <= 0 || value > HALF_LIFE_PERIOD || value !== Math.round(value)) {
    return false;
  }

  let n = Math.ceil(Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD));

  return n;
};
