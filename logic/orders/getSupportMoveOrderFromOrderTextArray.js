/**
 * Created by stewart on 28/07/17.
 */
const getMoveFromProvinceNameFromOrderTextArray = require ('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require ('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getSupportedToProvinceNameFromOrderTextArray = require('./getSupportedToProvinceNameFromOrderTextArray');
const getSupportedMoveUnitTypeFromOrderTextArray = require('./getSupportedMoveUnitTypeFromOrderTextArray');


module.exports = function(orderTextArray){
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.unitLocation = getMoveFromProvinceNameFromOrderTextArray(orderTextArray);
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.type = "SupportMove";
    order.supportedMoveUnitType = getSupportedMoveUnitTypeFromOrderTextArray(orderTextArray);
    order.supportMoveFromName = getSupportedFromProvinceNameFromOrderTextArray(orderTextArray);
    order.supportMoveToName = getSupportedToProvinceNameFromOrderTextArray(orderTextArray);
    return order
}
