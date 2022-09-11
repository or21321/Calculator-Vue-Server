class Calculator {
    strongOperators = ['*', '/']
    weakOperators = ['+', '-']
    operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    // orderedExpression = ''

    constructor() {

    }

    eval(expression) {
        console.log('eval from Calculator', expression);
        const orderedExpression = this.#orderExpression(expression)
        return eval(orderedExpression)
    }

    #orderExpression(expression) {
        let orderedExpression = ''
        const splittedExpression = expression.split(' ')

        let currExpression = ''
        for (var i = 0; i < splittedExpression.length; i++) {
            if (this.strongOperators.includes(splittedExpression[i])) {
                currExpression += splittedExpression[i - 1]
                currExpression += splittedExpression[i] +
                    splittedExpression[i + 1]

                orderedExpression += currExpression

                splittedExpression.splice(i - 1, 3)
                i -= 2
            }
        }

        for (var i = 0; i < splittedExpression.length; i++) {
            console.log('splittedExpression', splittedExpression);
            if (this.weakOperators.includes(splittedExpression[i])) {
                if (splittedExpression.length === 3) {
                    orderedExpression += splittedExpression[0] + splittedExpression[1] + splittedExpression[2]
                    break
                }
                if (i === 1) {
                    if (isNaN(splittedExpression[i - 1])) splittedExpression.splice(i - 1, 1)
                    orderedExpression += splittedExpression[i] + splittedExpression[i - 1]
                    splittedExpression.splice(i - 1, 2)
                } else if (i === 0) {
                    if (isNaN(splittedExpression[i + 1])) splittedExpression.splice(i + 1, 1)
                    orderedExpression += splittedExpression[i] + splittedExpression[i + 1]
                    splittedExpression.splice(i, 2)
                }
                i -= 2
            }
        }

        return orderedExpression
    }
}

const calculator = new Calculator()

function calculate(expression) {
    console.log('calculate, expression:', expression);
    // Option1: using eval (Not good because eval is dangerous and can be used against us, so 
    // implementing a calculator class that will be safer and more customizeable)
    // return eval(expression)
    // Option2: using Calculator class with eval method 
    // (still need to improve the expressiob reorder algorithm + validating the expression isnt harmful)
    return calculator.eval(expression)
}


module.exports = {
    calculate
}