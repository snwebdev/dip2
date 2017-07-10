/**
 * Created by stewart on 07/07/17.
 */
const  powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];

console.log("dip2");

const getOrders = require('./getOrders');
const removeBlankElementsFromArray = require("./removeBlankElementsFromArray");
const extractPowerFromOrdersText = require ('./getPowerFromOrdersText');
const getOrdersTextForPower = require('./getOrdersTextForPower');
const getOrderTextArrayFromOrderText = require('./getOrderTextArrayFromOrderText');
const getUnitTypeFromOrderTextArray = require('./getUnitTypeFromOrderTextArray');
const getProvinceByName = require('./getProvinceByName');
const map = require('./map');
const getUnitLocationProvinceNameFromOrderTextArray = require('./getUnitLocationNameFromOrderTextArray');
const getOrderTypeFromOrdersTextArray = require('./getOrderTypeFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getSupportedToProvinceNameFromOrderTextArray = require('./getSupportedToProvinceNameFromOrderTextArray');
const getSupportedOrderTypeFromOrderTextArray = require ('./getSupportedOrderTypeFromOrderTextArray');
const getSupportedHoldProvinceNameFromOrderTextArray = require ('./getSupportedHoldProvinceNameFromOrderTextArray');
const getMoveOrderFromOrderTextArray = require ('./getMoveOrderFromOrderTextArray');
const getHoldOrderFromOrderTextArray = require ('./getHoldOrderFromOrderTextArray');
const getOrderFromOrderTextArray = require('./getOrderFromOrderTextArray');
const splitOrdersByPowers = require('./splitOrdersByPowers');





var orders = getOrders();
orders = removeBlankElementsFromArray(orders);
var p = extractPowerFromOrdersText(powers, orders);
console.log(p);
var testOrders = getOrdersTextForPower(p,orders);
console.log("testOrders="+testOrders);

//
// var order = testOrders[0];
// console.log("order="+order);
// var orderTextArray = getOrderTextArrayFromOrderText(order);
// console.log("orderTextArray="+orderTextArray);
//
// var unitType = getUnitTypeFromOrderTextArray(orderTextArray);
// console.log('unitType='+unitType);
//
// console.log(getProvinceByName("ADS"));
//
// var location = getUnitLocationProvinceNameFromOrderTextArray(orderTextArray);
// console.log("location="+location);
//
// var orderType = getOrderTypeFromOrdersTextArray(orderTextArray);
// console.log ("orderType="+orderType);
//
// var moveTo = getMoveToProvinceNameFromOrderTextArray(orderTextArray);
// console.log("moveTo="+moveTo);
//
// var supFrom = getSupportedFromProvinceNameFromOrderTextArray(orderTextArray);
// console.log("supFrom="+supFrom);
//
// var supTo = getSupportedToProvinceNameFromOrderTextArray(orderTextArray);
// console.log("supTo="+supTo);
//
// var supportedOrderType = getSupportedOrderTypeFromOrderTextArray(orderTextArray);
// console.log("supportedOrderType="+supportedOrderType);
//
// var supportedHoldProvinceName = getSupportedHoldProvinceNameFromOrderTextArray(orderTextArray);
// console.log("supportedHoldProvinceName="+supportedHoldProvinceName);
//
// var MoveOrder = getMoveOrderFromOrderTextArray("France", orderTextArray);
// console.log("moveOrder="+ JSON.stringify(MoveOrder));
//
// var holdOrder = getHoldOrderFromOrderTextArray("France", orderTextArray);
// console.log("holdOrder="+ JSON.stringify(holdOrder));
//
// var order = getOrderFromOrderTextArray("France", orderTextArray);
// console.log('order='+ JSON.stringify(order));

//console.log("orders="+orders);
console.log("splitOrdersByPowers="+splitOrdersByPowers());




