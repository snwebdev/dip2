const addMoveSupport = require('./addMoveSupport');
const getSupportedMoveOrder = require('../getSupportedMoveOrder');

module.exports = function(units, orders){

    orders.forEach((order) => {
        if(
            order.type === "SupportMove" &&
            order.outcome === "succeed"
        ){
            addMoveSupport(units, orders, order);
        }
    })
    return
}