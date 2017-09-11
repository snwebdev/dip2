const getDependencies = require('./getMoveDependencies');
const getDeependencyByDependent = require('./getDependencyByDependent');

module.exports = function(orders, order){
    var dependencies = getDependencies(orders);
    var dependency = dependencies[0];
    while(dependency[1].outcome === 'Succeeds if other succeeds'){
        dependency = getDeependencyByDependent(dependencies,dependency[1] );
    }

    return dependency;

}