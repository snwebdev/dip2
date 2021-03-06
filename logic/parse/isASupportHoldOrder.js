const isAUnitType = require('./isAUnitType');
const isAProvinceName = require('./isAProvinceName');

module.exports = function(array){
    if(
        array.length === 5 &&
        isAUnitType(array[0]) &&
        isAProvinceName(array[1]) &&
        array[2] === "s" &&
        isAProvinceName(array[3]) &&
            array[4] === "h"
    ){
        return true;
    } else {
        return false;
    }
}