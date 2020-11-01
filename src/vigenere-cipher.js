const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(modification = true) {
        this.direct = modification
    }

    encrypt(message, key) {

        if (message === undefined || key === undefined) {
            throw new Error()
        }

        let result = message.toUpperCase().split(''),
            keyUp = key.toUpperCase(),
            spaces = 0

        for (let i = 0; i < result.length; i++) {
            let n = result[i].codePointAt(0)

            if (n >= 65 && n < 91) {
                let index = keyUp.codePointAt((i - spaces) % key.length) - 65,
                    index2 = n + index
                if (index2 > 90) {
                    index2 -= 26
                }
                result[i] = String.fromCodePoint(index2)
            } else spaces++
        }

        return this.direct ? result.join('') : result.reverse().join('')
    }

    decrypt(encryptedMessage, key) {

        if (encryptedMessage === undefined || key === undefined) {
            throw new Error()
        }

        let result = encryptedMessage.toUpperCase().split(''),
            keyUp = key.toUpperCase(),
            spaces = 0

        for (let i = 0; i < result.length; i++) {
            let n = result[i].codePointAt(0)

            if (n >= 65 && n < 91) {

                let index = keyUp.codePointAt((i - spaces) % key.length) - 65,
                    index2 = n - index

                if (index2 < 65) {
                    index2 += 26
                }
                result[i] = String.fromCodePoint(index2)
            } else spaces++
        }
        return this.direct ? result.join('') : result.reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;
