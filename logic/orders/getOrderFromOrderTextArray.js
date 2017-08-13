/**
 * Created by stewart on 10/07/17.
 */

const getOrderTypeFromOrdersTextArray = require('./getOrderTypeFromOrderTextArray');
const getMoveOrderFromOrderTextArray = require ('./getMoveOrderFromOrderTextArray');
const getHoldOrderFromOrderTextArray = require ('./getHoldOrderFromOrderTextArray');
const getSupportOrderFromOrderTextArray = require('./getSupportOrderFromOrderTextArray');


module.exports = function (orderTextArray) {
    order = {};

    // order.power = getPowerFromOrderTextArray(orderTextArray);
    orderType = getOrderTypeFromOrdersTextArray(orderTextArray);
    switch(orderType) {
        case "Move":
            order = getMoveOrderFromOrderTextArray(orderTextArray);
            break;
        case "Hold":
            order = getHoldOrderFromOrderTextArray(orderTextArray);
            break;
        case "Support":
            order = getSupportOrderFromOrderTextArray(orderTextArray);
            break;
        default:
            order = {};

    }
    return order;
}
