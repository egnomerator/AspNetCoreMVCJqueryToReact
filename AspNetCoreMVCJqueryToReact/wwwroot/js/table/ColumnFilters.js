class ColumnFilters extends React.Component {
    constructor(props) {
        super(props);

        this.handlePubSubClearFilters = this.handlePubSubClearFilters.bind(this);
        this.handleChangeSelectedNames = this.handleChangeSelectedNames.bind(this);
        this.handleChangeSelectedRoles = this.handleChangeSelectedRoles.bind(this);
        this.handleChangeSelectedJobs = this.handleChangeSelectedJobs.bind(this);
        this.handleClearFiltersClick = this.handleClearFiltersClick.bind(this);
        
        this.state = {
            selectedOptionNames: "",
            selectedOptionRoles: "",
            selectedOptionJobs: ""
        };

        this.unsubscribers = [];
    }

    componentDidMount() {
        var unsubscriber = this.props.pubSubSubscriber(this.props.subscribeEventClearFilters, this.handlePubSubClearFilters);
        this.unsubscribers.push(unsubscriber);
    }

    componentDidUpdate() {
        this.props.pubSubPublisher(this.props.publishEventFiltersChanged);
    }

    componentWillUnmount() {
        this.unsubscribers.map((unsubscribe, i) => { unsubscribe(); });
    }

    handlePubSubClearFilters() {
        this.clearColumnFilters();
    }

    handleChangeSelectedNames(event) {
        this.setState({ selectedOptionNames: event.target.value });
    }

    handleChangeSelectedRoles(event) {
        this.setState({ selectedOptionRoles: event.target.value });
    }

    handleChangeSelectedJobs(event) {
        this.setState({ selectedOptionJobs: event.target.value });
    }

    handleClearFiltersClick() {
        this.clearColumnFilters();
    }

    clearColumnFilters() {
        this.setState({
            selectedOptionNames: "",
            selectedOptionRoles: "",
            selectedOptionJobs: ""
        });
    }

    showClearFilters() {
        return this.state.selectedOptionNames !== "" || this.state.selectedOptionRoles !== "" || this.state.selectedOptionJobs !== "";
    }

    getColumnFiltersReact() {

        var dropdownClasses = "crew-column-filter custom-select custom-select-sm";

        var namesProps = {
            colFilterName: "Name",
            cssClasses: dropdownClasses,
            options: GetFilterNamesOptions(this.props.filterOptions.names),
            selectedOption: this.state.selectedOptionNames,
            onChange: this.handleChangeSelectedNames
        }
        var rolesProps = {
            colFilterName: "Role",
            cssClasses: dropdownClasses,
            options: GetFilterRolesOptions(this.props.filterOptions.roles),
            selectedOption: this.state.selectedOptionRoles,
            onChange:this.handleChangeSelectedRoles
        }
        var jobsProps = {
            colFilterName: "Job",
            cssClasses: dropdownClasses,
            options: GetFilterJobsOptions(this.props.filterOptions.jobs),
            selectedOption: this.state.selectedOptionJobs,
            onChange: this.handleChangeSelectedJobs
        }
        var clearFiltersProps = {
            cssClasses: "btn text-primary p-0 ml-3",
            label: "Clear Filters",
            onClick: this.handleClearFiltersClick
        }

        var children = [
            React.createElement("div", { key: "column-filter-area-label" }, "Column Filters"),
            React.createElement("div", { key: "column-filter-names", id: "filter-names" }, CreateFilterNames(namesProps)),
            React.createElement("div", { key: "column-filter-roles", id: "filter-roles" }, CreateFilterRoles(rolesProps)),
            React.createElement("div", { key: "column-filter-jobs", id: "filter-jobs" }, CreateFilterJobs(jobsProps))
        ];
        if (this.showClearFilters()) children.push(React.createElement("div", { key: "column-filters-clear", id: "clearFilters" }, CreateClearFilters(clearFiltersProps)));

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
