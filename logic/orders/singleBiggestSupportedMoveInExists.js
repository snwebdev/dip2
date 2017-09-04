const getMoveToProvinceOrders = require('./getMoveToProvinceOrders');

module.exports = function(orders, province){
    var moveToProvinceOrders = getMoveToProvinceOrders(orders, province);
    if(moveToProvinceOrders.length === 0) return false;
    var highestSupport = -1;

    orders.forEach((order) => {
        if(order.support === highestSupport) {
            highestSupport = -1;
        } else {
            if(order.support > highestSupport){
                highestSupport = order.support;
            }
        }
    })
    if(highestSupport === -1){
        return false;
    }
    return true;
}