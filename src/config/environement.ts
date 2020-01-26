'use strict';
let _ = require('lodash');
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
environment = _.mergeWith({}, environmentDefault, environment, (objValue, srcValue) => {
    if( _.isArray(srcValue)) {
        return srcValue;
    }
});
export = environment;