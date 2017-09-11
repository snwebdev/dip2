const getOrderRelevantProvinces = require('./getOrderRelevantProvincesFromOrders');
const getOrdersByProvince = require('./getOrdersByProvince');
const cutSupports = require('./cutSupports');
const succeedUncutSupportOrders = require('../succeedUncutSupportOrders');
const addUncutSupports = require('./addUncutSupports');
const resolveProvince = require('./resolveProvince');
const markUnitsForMovement = require('./markUnitsMovement');
const getMoveDependencies = require('./getMoveDependencies');
const resolveDependencies = require('./resolveDependencies');


module.exports = function(units, orders){
    console.log("");
    console.log("Resolving orders");

    cutSupports(orders);
    succeedUncutSupportOrders(orders);
    addUncutSupports(orders);

    var ordersByProvince = [];
    var orderRelevantProvinces = [];

    orderRelevantProvinces = getOrderRelevantProvinces(orders);
    var ordersByProvince = getOrdersByProvince(orders, orderRelevantProvinces);

    while (ordersByProvince.length > 0){
        var prov = ordersByProvince[0][0];
        var resolvingOrders = ordersByProvince[0][1];
         resolveProvince(units, orders, prov, resolvingOrders);

         //remove province (and orders) from ordersByProvince
        ordersByProvince.shift();
    }


    console.log("move dependencies..............................................");
    console.log(getMoveDependencies(orders));
    resolveDependencies(orders);


    markUnitsForMovement(units, orders);

    return;
}