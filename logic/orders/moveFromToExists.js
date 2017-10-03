const isMoveOrder = require('./isMoveOrder');
const getMoveFrom = require('./getMoveFrom');
const getMoveTo = require('./getMovesToProvince');

module.exports = function(orders, from, to){
    for(var i = 0; i < orders.length; i++){
        if (isMoveOrder(order) &&
                getMoveFrom(order) === from &&
                getMoveTo(order) === true
        ){
            return true;
        }
    }
    return false;
}