const path = require('path')
const defaultOptions = require('./defaultOptions')
const collectEnvName = require('./collectEnvName')
const { exec } = require('child_process')

// 合并option
module.exports = function resolveOptions (options = {}) {
    return new Promise(async (resolve, reject) => {
        const {
            mode,
            output
        } = options
        let newOptions = Object.assign({}, defaultOptions, {
            OUTPUT: !!output,
            OUTPUT_PATH: output && output !== true ? output : defaultOptions.OUTPUT_PATH
        })
        if (mode) {
            newOptions = Object.assign(newOptions, {
                MODE: mode
            })
            resolve(newOptions)
        } else {
            let envNameList = []
            try {
                envNameList = await collectEnvName(newOptions)
            } catch (error) {
                reject(error)
            }
            if (envNameList.length) {
                exec(
                    `npx electron showMessageBox.js`,
                    {
                        env: { args: JSON.stringify(envNameList) },
                        cwd: __dirname
                    },
                    (err, stdout, stderr) => {
                        const nameIndex = stdout.toString().trim()
                        newOptions = Object.assign(newOptions, {
                            MODE: envNameList[nameIndex]
                        })
                        resolve(newOptions)
                    }
                )
            } else {
                resolve(newOptions)
            }
        }
    })
}
