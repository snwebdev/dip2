const addHoldSupports = require('./addHoldSupports');
const addMoveSupports = require ('./addMoveSupports');

module.exports = function(units, orders){
    addHoldSupports(units, orders);
    addMoveSupports(units, orders);
}