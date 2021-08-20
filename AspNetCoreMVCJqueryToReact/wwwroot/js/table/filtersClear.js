function RenderClearFilters() {
    renderClearFiltersButton();
}

function renderClearFiltersButton() {
    var props = {
        cssClasses: "btn text-primary p-0 ml-3",
        label: "Clear Filters",
        showClearFilters: false,
        pubSubSubscriber: pubSub.subscribe,
        pubSubEvent: pubSub.eventRegister.columnFiltersChanged
    };
    var container = document.getElementById("clearFilters");
    ComponentApi.renderClearFiltersButton(container, props);
}