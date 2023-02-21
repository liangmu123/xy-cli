#!/usr/bin/env node
const { program } = require('commander')

program.version(require('../package.json').version)

program
    .command('run <commandName>')
    .option('-m, --mode <option>', 'Set environment variables')
    .option('-o, --output [option]', 'Set output directory')
    .description('run script command')
    .action(require('../lib/run'))

program.parse(process.argv)