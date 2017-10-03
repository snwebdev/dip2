module.exports = function(order, province){
    if(
        order.legal &&
            order.type === "Move" &&
            order.moveToName === province
    ){ return true;}
    else{ return false;}
}