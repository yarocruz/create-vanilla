#!/usr/bin/env node

const fs = require("fs")

const generateHTML = require('../utils/generateHTML')
const generateCSS = require('../utils/generateCSS')
const generateJS = require('../utils/generateJS')

const dirName = process.argv[2]

fs.mkdir(dirName, { recursive: true }, (err) => {
    if (err) throw err;
});
fs.writeFile(`${dirName}/index.html`, generateHTML(), err => {
    if (err) throw err;
})
fs.writeFile(`${dirName}/main.css`, generateCSS(), err => {
    if (err) throw err;
})
fs.writeFile(`${dirName}/app.js`, generateJS(), err => {
    if (err) throw err;
})
console.log(`${dirName} project created.\ncd into ${dirName} to checkout files.`)
