const getMoveOrderFromProvinceName = require('../getMoveOrderFromProvinceName');

module.exports = function(units, orders, order){

    var supportingOrder = order;
    var supportedMoveFromLocation = supportingOrder.supportMoveFromName;
    var supportedOrder = getMoveOrderFromProvinceName(orders, supportedMoveFromLocation);





    supportedOrder.support++;
    return

}