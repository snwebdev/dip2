/**
 * Created by stewart on 10/07/17.
 */

const isAProvince = require('./isAProvinceName');

module.exports = function(orderTextArray) {
    var text = orderTextArray[1];
    if(isAProvince(text)){
        return text;
    }
    return -1;
}