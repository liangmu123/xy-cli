const fs = require('fs')
const path = require('path')

module.exports = function outputEnv (options, content) {
    return new Promise((resolve, reject) => {
        try {
            const {
                BASE,
                OUTPUT_PATH
            } = options
            const outputFilePath = path.resolve(BASE, OUTPUT_PATH)
            const str = `module.exports = ${content}`
            fs.writeFileSync(outputFilePath, str, 'utf-8')
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
