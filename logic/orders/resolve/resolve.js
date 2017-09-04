const getOrderRelevantProvinces = require('./getOrderRelevantProvincesFromOrders');
const getOrdersByProvince = require('./getOrdersByProvince');
const cutSupports = require('./cutSupports');
const addUncutSupports = require('./addUncutSupports');
const resolveProvince = require('./resolveProvince');

module.exports = function(units, orders){
    console.log("");
    console.log("Resolving orders");

    cutSupports(orders);
    addUncutSupports(orders);

    var ordersByProvince = [];
    var orderRelevantProvinces = [];

    orderRelevantProvinces = getOrderRelevantProvinces(orders);
    var ordersByProvince = getOrdersByProvince(orders, orderRelevantProvinces);

    if(ordersByProvince.length > 0){
        var prov = ordersByProvince[0][0];
        var resolvingOrders = ordersByProvince[0][1];
         resolveProvince(units, orders, prov, resolvingOrders);

         //remove province (and orders) from ordersByProvince
    }

    return
}