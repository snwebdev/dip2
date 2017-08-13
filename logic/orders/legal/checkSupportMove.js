const couldMoveFromTo = require('../../map/couldMoveFromTo');
const getUnitTypeFromLocationName = require('../getUnitTypeFromLocationName');

module.exports = function(order){
    var unitType = getUnitTypeFromLocationName(order.supportMoveFromName);
    var from = order.supportMoveFromName;
    var to = order.supportMoveToName;
    order.checkSupportMove = couldMoveFromTo(unitType, from, to);
    return;
}