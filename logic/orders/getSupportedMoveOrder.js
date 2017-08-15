const getMoveOrderFromProvinceName = require('./getMoveOrderFromProvinceName');

module.exports = function(orders, order){

    var MoveProvince = order.supportedHoldProvinceName;

    var supportedOrder = getHoldOrderFromProvinceName(orders, holdProvince);

    return supportedOrder;
}