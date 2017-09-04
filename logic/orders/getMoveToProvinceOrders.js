module.exports = function(orders, province){
    var moveToProvinceOrders = [];
    orders.forEach((order) => {
        if( order.type === "Move" &&
            order.moveToName === province &&
            order.outcome === 'legal'){
            moveToProvinceOrders.push(order);
        }
    })
    return moveToProvinceOrders;
}