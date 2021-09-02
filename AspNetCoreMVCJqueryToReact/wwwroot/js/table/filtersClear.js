function RenderClearFilters() {
    renderClearFiltersButton();
}

function renderClearFiltersButton() {
    var props = {
        cssClasses: "btn text-primary p-0 ml-3",
        label: "Clear Filters",
        showClearFilters: false,
        pubSubSubscriber: ClientApp.PubSub.subscribe,
        pubSubEvent: ClientApp.PubSub.eventRegister.columnFiltersChanged
    };
    var container = document.getElementById("clearFilters");
    ClientApp.Components.renderClearFiltersButton(container, props);
}