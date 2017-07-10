/**
 * Created by stewart on 10/07/17.
 */

const getMoveFromProvinceNameFromOrderTextArray = require ('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require ('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');

module.exports = function(powerName, orderTextArray){
    order = {};
    order.power = powerName
    order.type = "Move";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.moveFromName = getMoveFromProvinceNameFromOrderTextArray(orderTextArray);
    order.moveToName = getMoveToProvinceNameFromOrderTextArray(orderTextArray);
    return order
}