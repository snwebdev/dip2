module.exports = function (order) {
    if (
        order.type === "SupportHold" ||
        order.Type === "SUpportMove"
    ) {
        return true;
    } else {
        return false;
    }
}