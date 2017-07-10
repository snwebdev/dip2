/**
 * Created by stewart on 10/07/17.
 */

module.exports = function (orderTextArray) {

    var text = orderTextArray[2];
    switch (text) {
        case "-":
            return "Move";


        case "s":
            return "Support";

        case "h":
            return "Hold";

        default:
           return -1;
    }
}

