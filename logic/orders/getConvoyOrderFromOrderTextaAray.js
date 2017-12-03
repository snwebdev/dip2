const getMoveFromProvinceNameFromOrderTextArray = require('./getMoveFromProvinceNameFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getPowerFromOrderTextArray = require('./getPowerFromOrderTextArray');
const getLocationNameFromOrderTextArray = require('./getLocationFromOrderTextArray');
const getConvoyFromNameFromOrderTextArray = require('./getConvoyFromNameFromOrderTextArray');
const getConvoyToNameFromOrderTextArray = require('./getConvoyToNameFromOrderTextArray');

module.exports = function (orderTextArray) {
    order = {};
    order.power = getPowerFromOrderTextArray(orderTextArray);
    order.type = "Convoy";
    order.unitType = getUnitTypeFromOrderTextArray(orderTextArray);
    order.unitLocation = getLocationNameFromOrderTextArray(orderTextArray);
    order.convoyFrom = getConvoyFromNameFromOrderTextArray(orderTextArray);
    order.convoyTo = getConvoyToNameFromOrderTextArray(orderTextArray);

    return order
}