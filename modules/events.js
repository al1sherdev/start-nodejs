const Events = require('events')


class Logger extends Events {
    log(a, b) {
        this.emit('calculate', a + b)
    }
}


const logger = new Logger()
logger.on('calculate', (data) => {
    console.log(data)
})
logger.log(1, 5)
logger.log(2, 1)
logger.log(2, 3)
logger.log(6123, 23)

