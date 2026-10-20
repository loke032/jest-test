
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function reverse(str) {
    let rev = ""

    for(let i=str.length;i>0;i--) {
        rev += str[i-1]
    }
    return rev
}

const calculator = {
    add: function add(a, b) {
        return a+b
    },
    subtract: function subtract(a, b) {
        return a-b
    },
    divide: function divide(a, b) {
        return a/b
    }, 
    multiply: function multiply(a, b) {
        return a*b
    }
}

function caesarCipher(str, shift) {
    let result = ""
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for(let j=0;j<str.length;j++) {
        const char = str[j]
        if(!alphabet.includes(char.toLowerCase())) {
            result += char
            continue
        }
        for(let i=0;i<alphabet.length;i++) {
        if (str[j].toLowerCase() === alphabet[i]) {
            const resultLetter = alphabet[(i+shift) % alphabet.length]

            if (str[j] !== str[j].toLowerCase()) {
                result += resultLetter.toUpperCase()
            } else {
                result += resultLetter
            }
        }
    }
    }
    return result
}

function analyzeArray(array) {
    let result = {}

    let total = 0
    for (number of array) {
        total += number
    }
    result.average = total/array.length
    
    let sortedArr = array.sort()
    
    result.max = sortedArr[array.length - 1]
    result.min = sortedArr[0]

    result.length = array.length

    return result
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };