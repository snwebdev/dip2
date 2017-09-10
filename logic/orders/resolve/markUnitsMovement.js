const getUnitIndexFromOrder = require('../getUnitIndexFromOrder');

module.exports = function (units, orders) {
    units.forEach((unit) => {
        unit.move = "Remain";
    });

    //take retreat and disbands from provinces
    orders.forEach((order) => {
        var province = order.unitLocation;

        if (order.action === 'Retreat or Disband'){
            for(var i = 0; i < units.length; i++){
                var unit = units[i];
                if(unit.locationName === province && unit.move !== "Moved"){
                    unit.locationName = null;
                    unit.retreatFrom = province;
                    unit.move = "retreat";
                }
            }
        }
        if(order.type == "Move" && order.outcome === "Succeeds"){
            var unitIndex = getUnitIndexFromOrder(units, order);
            var unit = units[unitIndex];
            unit.movedFrom = unit.locationName;
            unit.locationName = order.moveToName;
            unit.move = "Moved";

        }
    })
    return;
}