const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],

  getLength() {

    return this.links.length
  },
  addLink(value) {

    this.links.push(value)
    return this
  },
  removeLink(position) {

    if (!position) {
      this.links = []
      throw new Error()
    }

    this.links.splice(position - 1, 1)
    return this;
  },
  reverseChain() {

    this.links.reverse()
    return this
  },
  finishChain() {

    let result = ''
    for (let i = 0; i < this.links.length; i++) {
      result += `( ${this.links[i]} )`
      if (i + 1 < this.links.length) {
        result += '~~'
      }
    }

    this.links = []
    return result
  }
}

module.exports = chainMaker;
