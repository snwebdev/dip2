module.exports = function(dependencies, order){
    for(var i = 0; i < dependencies.length; i++){
        var dependency = dependencies[i];
        if(dependency[0].dependsOn === order){
            dependency[0].dependesOn === null;
            depependency[0].outcome === "Success";
        }
    }
}