$(document).ready(function () {
    runOrderedInitializations();
});

function runOrderedInitializations() {
    var orderedCallbacks = getOrderedCallbacks();
    $.each(orderedCallbacks, function (i, f) { f(); });
}

var registeredInitializations = {
    footer: [],
    loadTableArea: []
}

function getOrderedCallbacks() {
    var inits = registeredInitializations;
    var orderedInits = [];

    ClientApp.Shared.pushArrayInto(inits.footer, orderedInits);
    ClientApp.Shared.pushArrayInto(inits.loadTableArea, orderedInits);

    return orderedInits;
}

function ajaxRequest(httpMethod, url) {
    return $.ajax({
        type: httpMethod,
        url: url
    });
}
