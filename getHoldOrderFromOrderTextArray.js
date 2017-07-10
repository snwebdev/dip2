const getMoveFromProvinceNameFromOrderTextArray = require ('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require ('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getUnitLocationName = require('./getUnitLocationNameFromOrderTextArray');

module.exports = function(powerName, orderTextArray){
    order = {};
    order.power = powerName;
    order.type = "Hold";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.unitLocationName = getUnitLocationName(orderTextArray);
    return order
}