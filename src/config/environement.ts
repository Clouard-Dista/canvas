'use strict';
enum ProdLevel {
    dev="",
    prod="prod",
    r7="r7"
}
const environmentDefault = require("./config.ts");
let type = "";
if(ProdLevel[process.env.npm_lifecycle_event]){
    type = "." + ProdLevel[process.env.npm_lifecycle_event];
}
let environment = require("./config"+type+".ts");
export = {...environmentDefault, ...environment};