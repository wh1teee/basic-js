const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


  if (!Array.isArray(arr)) {
    throw new Error()
  }

  let result = arr.slice(0)

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      result[i] = undefined
      if (i + 1 < result.length) {
        result[i + 1] = undefined
      } 
    } else if (result[i] === '--discard-prev') {
      result[i] = undefined
      if (i - 1 > 0) {
        result[i - 1] = undefined;
      }
    } else if (result[i] === '--double-next') {
      if (i + 1 < result.length) {
        result[i] = result[i + 1]
      } else {
        result[i] = undefined;
      }
    } else if (result[i] === '--double-prev') {
      if (i - 1 > 0) {
        result[i] = result[i - 1]
      } else {
        result[i] = undefined
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined){
      result.splice(i, 1)
      i--
    }
  }

  return result
}
