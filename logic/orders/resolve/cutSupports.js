const moveToProvinceExists = require('../moveToProvinceExists');
const isSupportOrder = require('../isSupportOrder');
const cutSupport = require('../cutSupport');

module.exports = function(orders){
    orders.forEach((order) => {
        if(isSupportOrder(order)){
            if(moveToProvinceExists(orders, order.unitLocation)){
                cutSupport(order);
            }
        }
    })
}