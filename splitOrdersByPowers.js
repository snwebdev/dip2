/**
 * Created by stewart on 10/07/17.
 */

const getOrders = require('./getOrders');
const removeBlankElementsFromArray = require("./removeBlankElementsFromArray");
const isAPower = require('./isAPower');


const  powers = ["Austria", "England", "France", "Germany", "Italy", "Russia", "Turkey"];

module.exports = function() {

    var orders = getOrders();
    orders =removeBlankElementsFromArray(orders);

    var power = "";
    var powerOrders = [];
    var splitOrders = [];
    var lookingFor = "power"

    for(var i = 0; i < orders.length; i++) {
       var line = orders[i];

       if((lookingFor ==="power") && isAPower(line)) {
           if (!powerOrders === []) {
               splitOrders.push(powerOrders);
               powerOrders = [];
           } else {
               powerOrders.push(line);
               lookingfor="order";
           }
       }
       if(lookingFor === "order") {
           if(isAPower(line)){
               splitOrders.push(powerOrders);
               splitOrders = [];
           } else {
               splitOrders.push(line);
           }

       }
    }


    return splitOrders;
}
