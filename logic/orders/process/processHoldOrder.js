const orderPowerOwnsUnitInProvince = require('../legal/orderPowerOwnsUnitInProvince');
const orderedUnitTypeCorrect = require('../legal/orderedUnitTypeCorrect');

module.exports = function (units, order) {
    order.orderPowerOwnsUnit = orderPowerOwnsUnitInProvince(units, order);
    order.orderedUnitTypeCorrect = orderedUnitTypeCorrect(units, order);



    if (
        order.orderPowerOwnsUnit &&
        order.orderedUnitTypeCorrect
    ) {
        order.outcome = "legal";
    } else {
        order.outcome = "fail";
    }

    return;
}