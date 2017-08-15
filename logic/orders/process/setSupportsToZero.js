module.exports = function(orders){
    orders.forEach((order) => {

        var orderType = order.type;
        if(orderType === "Move" || orderType === "Hold") {
            order.support = 0;
        }
    });
    return;
}