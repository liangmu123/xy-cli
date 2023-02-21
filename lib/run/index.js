const { log } = require('../../utils/helper')
const resolveEnv = require('./env')

module.exports = function (commandName, options) {
    switch (commandName) {
        case 'env':
            resolveEnv(options)
            break
        default:
            log.error(`Command ${commandName} does not exist`)
            break
    }
}