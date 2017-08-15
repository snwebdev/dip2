const orderPowerOwnsUnitInProvince = require('./orderPowerOwnsUnitInProvince');
const supportedMoveFromProvinceIsOccupied = require('./supportedMoveFromProvinceIsOccupied');
const supportedUnitOrderedToMove = require('./supportedUnitOrderedToMove');
const supportingUnitCouldMovToSupportedProvince = require('./moveSupportingUnitCouldMoveToSupportedProvince');

module.exports = function (units, orders, order) {
    order.orderPowerOwnsUnitInProvince = orderPowerOwnsUnitInProvince(units, order);
    order.supportedMoveFromProvinceIsOccupied = supportedMoveFromProvinceIsOccupied(units, order);
    order.supportedUnitOrderedToMove = supportedUnitOrderedToMove(units, orders, order);
    order.supportingUnitCouldMoveToSupportedUnitProvince = supportingUnitCouldMovToSupportedProvince(units, order);

    if (
        order.orderPowerOwnsUnitInProvince &&
        order.supportedMoveFromProvinceIsOccupied &&
        order.supportedUnitOrderedToMove &&
        order.supportingUnitCouldMoveToSupportedUnitProvince
    ) {
        return true;
    } else {
        return false;
    }


}