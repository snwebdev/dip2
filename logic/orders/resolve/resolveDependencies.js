const getDependencies = require('./getMoveDependencies');
const getEndOfDependency = require('./getEndOfDependency');
const removeOrderFromDependencies = require('./removeOrderFromDependencies');
const succeedDependent = require('./succeedDependent');

module.exports = function(orders){
    var dependencies = getDependencies(orders);

    while(dependencies.length > 0){
        var order = dependencies[0][0];
        var endOfDependenceChain = getEndOfDependency(orders, order)[1];

        if(endOfDependenceChain.outcome === "Succeeds"){
            succeedDependent(dependencies, endOfDependenceChain);
            removeOrderFromDependencies(dependencies, endOfDependenceChain);
        }

    }

return;

}