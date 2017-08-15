const getOrderRelevantProvinces = require('./getOrderRelevantProvincesFromOrders');

module.exports = function(units, orders){
    console.log("");
    console.log("Resolving orders");

    var ordersByProvince = [];
    var orderRelevantProvinces = [];

    orderRelevantProvinces = getOrderRelevantProvinces(orders);
    console.log("++++++++++++++++++++++++++++++");
    console.log(orderRelevantProvinces);
    console.log("++++++++++++++++++++++++++++++");
    return
}