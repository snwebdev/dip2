module.exports = function(dependencies, order){
    for(var i = 0; i < dependencies.length; i++){
        var dependency = dependencies[i][0];
        if(dependency === order) return true;

    }
    return false;
}