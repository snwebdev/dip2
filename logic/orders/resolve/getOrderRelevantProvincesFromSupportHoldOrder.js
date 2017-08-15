module.exports = function(order){
    var orderedProvinces = [];

    if(order.outcome === 'legal'){
        if(orderedProvinces.indexOf(order.unitLocation) === -1){
            orderedProvinces.push(order.unitLocation);
        }
        if(orderedProvinces.indexOf(order.supportedHoldProvinceName)=== -1){
            orderedProvinces.push(order.supportedHoldProvinceName);
        }
    }

    return orderedProvinces;
}