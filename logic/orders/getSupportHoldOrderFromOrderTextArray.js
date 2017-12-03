/**
 * Created by stewart on 31/07/17.
 */
/**
 * Created by stewart on 28/07/17.
 */
const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getSupportedToProvinceNameFromOrderTextArray = require('./getSupportedToProvinceNameFromOrderTextArray');
const getSupportedHoldProvinceNameFromOrderTextArray = require('./getSupportedHoldProvinceNameFromOrderTextArray');


module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.unitLocation = getMoveFromProvinceNameFromOrderTextArray(orderTextArray);
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.type = "SupportHold";
    order.supportedHoldProvinceName = getSupportedHoldProvinceNameFromOrderTextArray(orderTextArray);
    return order
}
