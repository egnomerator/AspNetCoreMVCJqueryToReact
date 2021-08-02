class ColumnFilters extends React.Component {
    constructor(props) {
        super(props);


    }

    getColumnFiltersReact() {
        var children = [
            React.createElement("div", { key: "column-filter-area-label" }, "Column Filters"),
            React.createElement("div", { key: "column-filter-names", id: "filter-names" }, CreateFilterNames(this.props.filterOptions.names)),
            React.createElement("div", { key: "column-filter-roles", id: "filter-roles" }, CreateFilterRoles(this.props.filterOptions.roles)),
            React.createElement("div", { key: "column-filter-jobs", id: "filter-jobs" }, CreateFilterJobs(this.props.filterOptions.jobs)),
            React.createElement("div", { key: "column-filters-clear", id: "clearFilters" }, CreateClearFilters())
        ];

        return React.createElement(
            "div",
            { className: "form-inline" },
            children
        );
    }

    render() {
        return this.getColumnFiltersReact();
    }
}
