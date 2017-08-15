const orderPowerOwnsUnitInProvince = require('../legal/orderPowerOwnsUnitInProvince');
const orderedUnitTypeCorrect = require('../legal/orderedUnitTypeCorrect');
const couldMoveFromTo = require('../../map/couldMoveFromTo');

module.exports = function (units, order) {
    order.orderPowerOwnsUnit = orderPowerOwnsUnitInProvince(units, order);
    order.orderedUnitTypeCorrect = orderedUnitTypeCorrect(units, order);
    order.couldMoveTo = couldMoveFromTo(order.unitType, order.unitLocation, order.moveToName);



    if (
        order.orderPowerOwnsUnit &&
        order.orderedUnitTypeCorrect &&
            order.couldMoveTo
    ) {
        order.outcome = "legal";
    } else {
        order.outcome = "fail";
    }

    return;
}