/**
 * Created by stewart on 10/07/17.
 */

module.exports = function (orderTextArray) {

    var text = orderTextArray[4];

    switch (text) {
        case "-":
            return "Move"
        case "h":
            return "Hold"
        default:
            return -1
    }
}