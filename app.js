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
const processOrders = require('./logic/orders/process/processOrders');
const addSupportedMoveUnitTypeToOrders = require('./logic/orders/addSupportedMoveUnitTpeToOrders');

const resolve = require('./logic/orders/resolve/resolve');




var orders = getOrdersArrayFromOrdersTextFile(units);
initialiseMapFromOrders(units, orders);
addSupportedMoveUnitTypeToOrders(units, orders);

console.log("units");
console.log(units);
console.log("orders");
console.log(orders);


processOrders(units, orders);
console.log("after orderProcessing... ");
console.log(orders);

resolve(units, orders)

console.log('end');










