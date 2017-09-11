module.exports = function(dependencies, order){
    for(var i = 0; i < dependencies.length; i++){
        var dependency = dependencies[i];
        if(dependency[0] === order){
            return dependency;
        }}
        return -1;
}