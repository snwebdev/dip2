const succeedOrder = require('../succeedOrder');

module.exports = function(dependencies, order){
    for(var i = 0; i < dependencies.length; i++){
        if(dependencies[i][1] === order){
            succeedOrder(dependencies[i][0]);
        }
    }

    return;
}