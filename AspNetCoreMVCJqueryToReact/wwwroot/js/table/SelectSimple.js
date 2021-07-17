class SelectSimple extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeSelected = this.handleChangeSelected.bind(this);
        this.handlePubSubClearFilters = this.handlePubSubClearFilters.bind(this);
        this.state = {
            selectedOption: props.selectedOption
        };
    }

    componentDidMount() {
        this.props.pubSubSubscriber(this.props.pubSubEvent, this.handlePubSubClearFilters);
    }

    handlePubSubClearFilters() {
        this.setState({ selectedOption: "" });
    }

    handleChangeSelected(event) {
        this.setState({ selectedOption: event.target.value });
    }

    getSelectReact() {
        var selectOptions = [];
        this.props.options.o.map((option, i) =>
            selectOptions.push(
                React.createElement("option", { value: option.value, key: 'col-filter-' + this.props.colFilterName + '-' + i }, option.label)));

        return React.createElement("select", { className: this.props.cssClasses + ' ml-1', value: this.state.selectedOption, onChange: this.handleChangeSelected }, selectOptions);
    }

    render() {
        return this.getSelectReact();
    }
}