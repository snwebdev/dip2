/**
 * Created by stewart on 19/07/17.
 */

const getOrderFromOrderTextArray = require("./getOrderFromOrderTextArray");


module.exports = function(ordersTextArray){
    var ordersArray = [];
    ordersTextArray.forEach((e) => {
        var order =getOrderFromOrderTextArray(e);
        ordersArray.push(order);
    });
    return ordersArray;
}
