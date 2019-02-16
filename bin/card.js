#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'yellow',
}

const data = {
    name: chalk.white('Heitor Dobeis /'),
    handle: chalk.cyan('dobeis'),
    work: chalk.white('Software Developer'),
    twitter: chalk.cyan('https://twitter.com/heitordobeis'),
    github: chalk.cyan('https://github.com/dobeis'),
    linkedin: chalk.cyan('https://www.linkedin.com/in/dobeis/'),
    web: chalk.cyan('https://dobeis.com/'),
    npx: chalk.white('npx dobeis'),
    labelWork: chalk.white.bold('      Work:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelCard: chalk.white.bold('      Card:')
}

const newline = '\n'
const heading = `             ${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))