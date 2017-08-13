
const placeUnit = require("../map/placeUnit");

module.exports = function(units, orders){
console.log ("orders="+JSON.stringify(orders));
orders.forEach((order) => {
    placeUnit(units, order['power'], order['unitType'], order['unitLocation']);
})

    return units;
}