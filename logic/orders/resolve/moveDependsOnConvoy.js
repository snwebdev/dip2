module.exports = function(order){
    if(!order.hasOwnProperty("DependsOnConvoy")) return false;
    if(order.outcome === "DependsOnConvoy") return true;
    return false;
}