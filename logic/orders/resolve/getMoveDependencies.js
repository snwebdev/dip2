const isDependent = require('./isDependent');

module.exports = function(orders){
    var dependencies = []
    orders.forEach((order) => {
        if (order.type === "Move" && order.action === "Succeeds if other succeeds"){
            if(!isDependent(dependencies, order)){
                dependencies.push([order, order.dependsOn]);
            }
        }

    })
    return dependencies;
}