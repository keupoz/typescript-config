#!/usr/env/bin node

const fs = require("fs"),
    { name } = require("./package.json");

/** @param {any} obj */
function json(obj) {
    return `${JSON.stringify(obj, null, 4)}\n`;
}

fs.writeFileSync("tsconfig.json", json({
    extends: `${name}/tsconfig.json`
}));

fs.writeFileSync("tslint.json", json({
    extends: `${name}/tslint.json`
}));
