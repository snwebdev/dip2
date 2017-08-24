const getOrderRelevantProvinces = require('./getOrderRelevantProvincesFromOrders');
const getOrdersByProvince = require('./getOrdersByProvince');
const cutSupports = require('./cutSupports');

module.exports = function(units, orders){
    console.log("");
    console.log("Resolving orders");

    cutSupports(orders);

    var ordersByProvince = [];
    var orderRelevantProvinces = [];

    orderRelevantProvinces = getOrderRelevantProvinces(orders);
    console.log("++++++++++++++++++++++++++++++");
    console.log("RelevantProvinces");
    console.log(orderRelevantProvinces);
    console.log("++++++++++++++++++++++++++++++");

    var ordersByProvince = getOrdersByProvince(orders, orderRelevantProvinces);
    console.log("++++++++++++++++++++++++++++++");
    console.log("ordersByProvince");
    console.log(ordersByProvince);
    console.log("++++++++++++++++++++++++++++++");
    return
}