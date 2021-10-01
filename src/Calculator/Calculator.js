module.exports = class Calculator {
    constructor() {

    }

    calculate(number1) {
        return Number.parseFloat(number1)
    }

    calculate2(...numbers) {
        let convertedElements = []
        let result = 0

        numbers.forEach(element => {
            if(element == '') {
                return 0
            } 
            convertedElements.push(Number.parseFloat(element))
        });
        
        convertedElements.forEach(element => {
            result += element
        })

        return result
    }
}