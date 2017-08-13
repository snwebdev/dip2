const getMoveFromProvinceNameFromOrderTextArray = require ('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require ('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getUnitLocationName = require('./getUnitLocationNameFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');

module.exports = function(powerName, orderTextArray){
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Hold";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.unitLocationName = getUnitLocationName(orderTextArray);
    return order
}