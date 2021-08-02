function RenderColumnFilters(filterOptions) {
    ReactDOM.render(
        React.createElement(
            ColumnFilters,
            { filterOptions: filterOptions }
        ),
        document.getElementById("columnFiltersContainer")
    );
}
