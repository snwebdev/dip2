/**
 * Created by stewart on 07/07/17.
 */
const  powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];
var units = []; //array holding position of units

console.log("dip2");

// const getOrders = require('./logic/orders/getOrders');
const getUnits = require('./logic/map/getUnits');

const placeUnit = require("./logic/map/placeUnit");
// const powerHasUnitInProvince = require("./orders/powerHasUnitInProvince");
 const printMap = require ("./logic/map/printMap");
// const getProvince = require("./orders/getProvince");
// const getOrdersArrayFromOrdersTextArray = require("./orders/getOrdersArrayFromOrdersTextArray");
 const getOrdersArrayFromOrdersTextFile = require("./logic/orders/getOrdersArrayFromOrderTextFile");
 const initialiseMap = require("./logic/setup/initialiseMap");
const initialiseMapFromOrders = require("./logic/setup/initialiseMapFromOrders");
const fleetConnects = require('./logic/map/fleetConnects');
const armyConnects = require('./logic/map/armyConnects');
const orderPowerOwnsUnitInProvince = require('./logic/orders/legal/orderPowerOwnsUnitInProvince');
const orderedUnitIsRightType = require('./logic/orders/legal/orderedUnitIsRightType');
const checkOrder = require('./logic/orders/legal/checkOrder');
initialiseMap(units);
console.log("units="+ JSON.stringify(units));

var ordersArray = getOrdersArrayFromOrdersTextFile();
console.log(ordersArray);
order = ordersArray[1];
console.log("before check "+ JSON.stringify(order));
checkOrder(units, order);



console.log("after check "+ JSON.stringify(order));










