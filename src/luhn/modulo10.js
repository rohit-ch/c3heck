// Implementation of Luhn Algorithm also known as Modulo 10 Algorithm
// Reference: https://en.wikipedia.org/wiki/Luhn_algorithm

// Uses numeric string as param input since Number loses precision over 2^53
// Refer: https://www.ecma-international.org/ecma-262/5.1/#sec-8.5
export const checkLuhn = (inputNumString) => {
    let nDigits = inputNumString.length
    let sum = parseInt(inputNumString[nDigits-1])
    let calculatedSum= genLuhn10Checksum(inputNumString.substring(0, nDigits-1))
    return (sum === calculatedSum)
}

export const genLuhn10Checksum = (inputNumString) => {

    // If the string contains non-numeric characters then return undefined
    if (inputNumString.match("^[0-9]+$") === null) {
        return undefined
    }

    let numList = inputNumString.split('')
    numList.reverse()

    let total = 0
    numList.map((value, index) => {
        let valInt = parseInt(value)
        if (valInt) {
            if (index%2 !== 0){
                total += valInt
            } else {
                let tmpVal = valInt*2
                if (tmpVal > 9) tmpVal -= 9;
                total += tmpVal
    
            }
        }
    })

    let sumMod10 = total%10
    if (sumMod10) {
        return 10 - sumMod10
    } else {
        return 0
    }
}