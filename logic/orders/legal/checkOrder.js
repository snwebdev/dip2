/**
 * Created by stewart on 08/08/17.
 */
const checkPower = require('./checkPower');
const checkUnitType = require('./checkUnitType');
const checkMove = require('./checkMove');
module.exports = function(units, order){


checkPower(units, order);
checkUnitType(units, order);
switch(order.orderType){
    case "Move" : checkMove(order);
    break;
    case"SupportMove": checkSupportMove(order);
    break;
}




  return;
}