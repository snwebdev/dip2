module.exports = function (order, province) {


    switch (order.type) {

        case "Hold":
            if (order.unitLocation === province) {

                return true;
            }
            break;

        case "SupportHold":

            if (
                order.unitLocation === province ||
                order.supportedHoldProvinceName === province
            ) {
                return true;
            }
            break;

        case "Move":
            return true;
            if (
                order.unitLocation === province ||
                order.moveToName === province
            ) {
                return true;
            }
            break;

        case "SupportMove":
            if (
                order.unitLocation === province ||
                order.supportMoveFromName === province ||
                order.supportMoveToName === province
            ) {
                return true;
            }
            break;

        default:
            return false;

    }

}