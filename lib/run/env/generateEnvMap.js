const fs = require('fs')
const path = require('path')
const parseEnv = require('./parseEnv')

function generateEnvMap (options = {}) {
    return new Promise((resolve, reject) => {
        const {
            BASE,
            DIR_PATH,
            ENV_FILE_PATH,
            MODE
        } = options
        const dirPath = path.resolve(BASE, DIR_PATH)
        if (!fs.existsSync(dirPath)) {
            reject(`${dirPath} Folder does not exist`)
            return
        }
        const envFilePath = path.resolve(dirPath, ENV_FILE_PATH)
        if (!fs.existsSync(envFilePath)) {
            reject(`${envFilePath} file does not exist`)
            return
        }
        const envFileContent = fs.readFileSync(envFilePath)
        const envMap = parseEnv(envFileContent)
        let modeMap = {}
        if (MODE) {
            const modeEnvFilePath = path.resolve(dirPath, `.env.${MODE}`)
            if (!fs.existsSync(modeEnvFilePath)) {
                reject(`${modeEnvFilePath} file does not exist`)
                return
            }
            const modeEnvFileContent = fs.readFileSync(envFilePath)
            modeMap = parseEnv(modeEnvFileContent)
        }
        resolve({
            ...envMap,
            ...modeMap
        })
    })
}

module.exports = generateEnvMap