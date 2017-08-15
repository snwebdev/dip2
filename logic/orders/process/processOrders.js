const processSupportHoldOrders = require('./processSupportHoldOrders');
const setSupportsToZero = require('./setSupportsToZero');
const processHoldOrders = require('./processHoldOrders');
const processSupportMoveOrders = require('./processSupportMoveOrders');
const addSupports = require('./addSupports');
const processMoveOrders = require('./processMoveOrders');

module.exports = function(units, orders){
    setSupportsToZero(orders);

    processHoldOrders(units, orders);
    processSupportHoldOrders(units, orders);

    processMoveOrders(units, orders);
    processSupportMoveOrders(units, orders);

    addSupports(units, orders);


    return;
}