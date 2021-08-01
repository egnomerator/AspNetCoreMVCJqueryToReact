function RenderClearFilters() {
    renderClearFiltersButton();
}

function renderClearFiltersButton() {
    ReactDOM.render(
        React.createElement(
            ClearFilters,
            {
                cssClasses: "btn text-primary p-0 ml-3",
                label: "Clear Filters"
            }
        ),
        document.getElementById("clearFilters")
    )
}