const getSupportedOrder = require('../getSupportedOrder');
const isSupportOrder = require('../isSupportOrder');

module.exports = function(orders){
    orders.forEach((order) => {
        if (
            isSupportOrder(order) &&
                order.outcome === "legal" &&
                order.cut !== true
        ){
           var supportedOrder = getSupportedOrder(orders, order) ;
           supportedOrder.support++;

        }

    })
}