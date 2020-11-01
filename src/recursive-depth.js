const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    if (Array.isArray(arr)) {
      let maxDepth = 0
      if (arr.length > 0) {
        maxDepth = Math.max(...arr.map(item => this.calculateDepth(item)))
      }
      return 1 + maxDepth
    } else {
      return 0
    }
  }
};