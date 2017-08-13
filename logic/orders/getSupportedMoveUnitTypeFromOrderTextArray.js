/**
 * Created by stewart on 08/08/17.
 */
const getSupportedFromProvinceNameFromOrderTextArray = require('./getSupportedFromProvinceNameFromOrderTextArray');
const getUnitTypeFromLocationName = require('./getUnitTypeFromLocationName');
module.exports = function(orderTextArray){
    var fromName = getSupportedFromProvinceNameFromOrderTextArray(orderTextArray);
    if (fromName === -1) return -1;
    return getUnitTypeFromLocationName(fromName);

}
