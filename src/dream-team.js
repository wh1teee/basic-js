const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) {
    return false;
  }

  let arr = [],
     result = ''

  members.forEach(member => {
    if (typeof member === 'string') {
      arr.push(member.trim().toUpperCase())
    }
  })

  arr.sort().forEach(item => result += item[0])

  return result
};
