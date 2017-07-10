/**
 * Created by stewart on 10/07/17.
 */

const getOrderTypeFromOrdersTextArray = require('./getOrderTypeFromOrderTextArray');
const getMoveOrderFromOrderTextArray = require ('./getMoveOrderFromOrderTextArray');
const getHoldOrderFromOrderTextArray = require ('./getHoldOrderFromOrderTextArray');

module.exports = function (powerName, orderTextArray) {
    order = {};
    order.power = powerName;

    orderType = getOrderTypeFromOrdersTextArray(orderTextArray);
    switch(orderType) {
        case "Move":
            order = getMoveOrderFromOrderTextArray(powerName, orderTextArray);
            break;
        case "Hold":
            order = getHoldOrderFromOrderTextArray(powerName, orderTextArray);
            break;
        default:
            order = {};

    }
    return order;
}
