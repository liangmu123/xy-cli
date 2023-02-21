const fs = require('fs')
const path = require('path')

function collectEnvName (options = {}) {
    const {
        BASE,
        DIR_PATH,
        FILE_MATCH_REG
    } = options
    const dirPath = path.resolve(BASE, DIR_PATH)
    if (!fs.existsSync(dirPath)) {
        log.error(`${dirPath} Folder does not exist`)
        return
    }
    const nameList = []
    const fileNameList = fs.readdirSync(dirPath)
    let matchRes = null
    fileNameList.forEach(filename => {
        matchRes = filename.match(FILE_MATCH_REG)
        if (matchRes) {
            nameList.push(matchRes[1])
        }
    })
    return nameList
}

module.exports = collectEnvName
