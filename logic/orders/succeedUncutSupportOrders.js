const isSupportOrder = require('./isSupportOrder');

module.exports = function(orders){
    orders.forEach((order) => {
       if(isSupportOrder(order) && order.outcome === "legal"){
           order.outcome = "Succeeds";
    }
    })
    return;
}