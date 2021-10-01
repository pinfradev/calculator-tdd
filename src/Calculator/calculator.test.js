const Calculator = require('./Calculator.js')

//“5”=5 “1+2”=3 “4+2”=6 “3+8+7”=18
//“1+2+4\n+5+6”=18
//“3+6-4”=5
//“31+3\n+6-4”=36
//“(31+3)*(2+6)-4”=268
describe("Calculator", () => {
    let calculator = new Calculator()

    it("Should return de send number", () => {
        let result = calculator.calculate('5')

        expect(result).toEqual(5)
    })

    it("Should sum 2 numbers", () => {
        const number1 = '1'
        const number2 = '2'
        const expectedResult = 3
        const result = calculator.calculate2(number1, number2)
        
        expect(result).toEqual(expectedResult)
    })

    it("Should sum 0 when is empty paramenter", () => {
        const number1 = '1'
        const number2 = ''
        const expectedResult = 1
        const result = calculator.calculate2(number1, number2)
        
        expect(result).toEqual(expectedResult)
    })
})