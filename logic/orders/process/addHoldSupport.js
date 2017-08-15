const getSupportedHoldOrder = require('../getSupportedHoldOrder');

module.exports = function(orders, order){

    var supportedHoldOrder = getSupportedHoldOrder(orders, order);
    supportedHoldOrder.support++;
    return;
}