import { genLuhn10Checksum, checkLuhn } from './modulo10';

describe("Modulo10 or Luhn10 Test Cases", () => {
    it("Valid Visa Credit Card", () => {
        let cc = "4111111111111111"
        expect(genLuhn10Checksum(cc.substring(0, cc.length-1))).toEqual(parseInt(cc[cc.length-1]))
    })

    it("Valid AMEX Credit Card", () => {
        let cc = "340000000000009"
        expect(genLuhn10Checksum(cc.substring(0, cc.length-1))).toEqual(parseInt(cc[cc.length-1]))
    })

    it("Valid Diners Club", () => {
        let cc = "30000000000004"
        expect(checkLuhn(cc)).toEqual(true)
    })

    it("Invalid AMEX", () => {
        let cc = "340000000000008"
        expect(checkLuhn(cc)).toEqual(false)
    })
})