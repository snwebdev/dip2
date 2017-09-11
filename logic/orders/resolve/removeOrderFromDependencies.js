module.exports = function(dependencies, order){
    for(var i = 0; i < dependencies.length; i++){
        if(dependencies[i][1] === order){
            dependencies.splice(i,1);
            return;
        }
    }
}