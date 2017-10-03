module.exports = function(orders){
    var convoys = [];
    orders.forEach((order) => {
        if (order.type === "Convoy" &&
        order.legal){
            convoys.push(order);
        }
    })
    return convoys;
}