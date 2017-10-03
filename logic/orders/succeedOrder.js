module.exports = function (order) {
    order.outcome = "Succeeds";
    delete order.action;
    delete order.dependsOn;
    return;
}
