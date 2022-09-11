const calculatorService = require('./calculator.service')

async function calculate(req, res) {
    console.log('req.query', req.query);
    const expression = req.query['0']
    try {
        const result = calculatorService.calculate(expression)
        console.log('result', result);
        res.json(result)
    } catch (err) {
        console.log('err', err);
        res.status(401).send({ err: 'Failed to calculate' })
    }
}

module.exports = {
    calculate
}