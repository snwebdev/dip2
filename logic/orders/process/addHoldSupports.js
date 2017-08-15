const addHoldSupport = require('./addHoldSupport');
const getSupportedHoldOrder = require('../getSupportedHoldOrder');

module.exports = function(units, orders){

    orders.forEach((order) => {
        if(
            order.type === "SupportHold" &&
            order.outcome === "succeed"
        ){
            addHoldSupport(orders, order);
        }
    })
    return
}