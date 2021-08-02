function RenderClearFilters() {
    renderClearFiltersButton();
}

function renderClearFiltersButton() {
    ReactDOM.render(
        React.createElement(
            ClearFilters,
            {
                cssClasses: "btn text-primary p-0 ml-3",
                label: "Clear Filters",
                showClearFilters: false,
                pubSubSubscriber: pubSub.subscribe,
                pubSubEvent: pubSub.eventRegister.columnFiltersChanged
            }
        ),
        document.getElementById("clearFilters")
    )
}