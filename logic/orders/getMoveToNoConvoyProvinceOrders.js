module.exports = function(orders, province){
    var moveToProvinceOrders = [];
    orders.forEach((order) => {
        if( order.outcome !== "DependsOnConvoy" &&
            order.type === "Move" &&
            order.moveToName === province &&
            order.legal){
            moveToProvinceOrders.push(order);
        }
    })
    return moveToProvinceOrders;
}