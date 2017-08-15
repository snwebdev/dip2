const checkSupportMove = require('../legal/checkSupportMoveOrder');
const succeedOrder = require('./succeedOrder');
const failOrder = require('./failOrder');

module.exports = function(units, orders){
    orders.forEach((order) => {

        if(order.type === "SupportMove"){

            if(checkSupportMove(units, orders, order)){
                order.outcome = "legal";
            } else {
                failOrder(order);
            }
        }
    })
    return;
}