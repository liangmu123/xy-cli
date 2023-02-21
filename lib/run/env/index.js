const generateEnvMap = require('./generateEnvMap')
const resolveOptions = require('./resolveOptions')
const { log } = require('../../../utils/helper')
const outputEnv = require('./outputEnv')

async function resolveEnv (options) {
    const loading = log.start('The environment configuration is being prepared...')
    try {
        const newOptions = await resolveOptions(options)
        const envMap = await generateEnvMap(newOptions)
        process.env['XY-ENV'] = JSON.stringify(envMap)
        loading.stop()
        log.success('Environment configuration succeeded')
        log.info(process.env['XY-ENV'])
        if (newOptions.OUTPUT) {
            await outputEnv(newOptions, process.env['XY-ENV'])
            log.success('File output succeeded')
        }
    } catch (error) {
        loading.stop()
        log.error(error)
    }
}

module.exports = resolveEnv
