/**
 * Created by stewart on 10/07/17.
 */

const getMoveFromProvinceNameFromOrderTextArray = require ('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require ('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');

module.exports = function(orderTextArray){
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Move";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.unitLocation = getMoveFromProvinceNameFromOrderTextArray(orderTextArray);
    order.moveToName = getMoveToProvinceNameFromOrderTextArray(orderTextArray);
    return order
}