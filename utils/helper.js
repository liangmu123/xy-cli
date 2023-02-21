const chalk = require('chalk')
const ora = require('ora')

const log = {
    error (msg) {
        ora(chalk.red(msg)).fail()
    },
    success (msg) {
        ora(chalk.green(msg)).succeed()
    },
    start (msg) {
        return ora(chalk.green(msg)).start()
    },
    info (msg) {
        ora(chalk.blue(msg)).info()
    }
}

module.exports = {
    log
}