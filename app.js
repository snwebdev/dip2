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
const getUnitLocationProvinceNameFromOrderTextArray = require('./getUnitLocationProvinceNameFromOrderTextArray');
const getOrderTypeFromOrdersTextArray = require('./getOrderTypeFromOrderTextArray');
const getMoveToProvinceNameFromOrderTextArray = require('./getMoveToProvinceNameFromOrderTextArray');
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');




var orders = getOrders();
orders = removeBlankElementsFromArray(orders);
var p = extractPowerFromOrdersText(powers, orders);
console.log(p);
var testOrders = getOrdersTextForPower(p,orders);
console.log("testOrders="+testOrders);


var order = testOrders[0];
console.log("order="+order);
var orderTextArray = getOrderTextArrayFromOrderText(order);
console.log("orderTextArray="+orderTextArray);

var unitType = getUnitTypeFromOrderTextArray(orderTextArray);
console.log('unitType='+unitType);

console.log(getProvinceByName("ADS"));

var location = getUnitLocationProvinceNameFromOrderTextArray(orderTextArray);
console.log("location="+location);

var orderType = getOrderTypeFromOrdersTextArray(orderTextArray);
console.log ("orderType="+orderType);

var moveTo = getMoveToProvinceNameFromOrderTextArray(orderTextArray);
console.log("moveTo="+moveTo);

var supFrom = getSupportedFromProvinceNameFromOrderTextArray(orderTextArray);
console.log("supFrom="+supFrom);



