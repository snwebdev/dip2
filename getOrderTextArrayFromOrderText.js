/**
 * Created by stewart on 10/07/17.
 */

const removeBlankElementsFromArray = require('./removeBlankElementsFromArray');

module.exports = function (orderText){
    var orderTextArray = orderText.split(' ');
    console.log('orderTextArray='+orderTextArray);
    return removeBlankElementsFromArray(orderTextArray);

}