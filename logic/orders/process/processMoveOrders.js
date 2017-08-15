const processMoveOrder = require('./processMoveOrder');

module.exports = function(units, orders){
    orders.forEach((order) => {

        if(order.type === "Move"){
            processMoveOrder(units, order);
        }
    })
}