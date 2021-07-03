class SelectSimple extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeSelected = this.handleChangeSelected.bind(this);
        this.handlePubSubClearFilters = this.handlePubSubClearFilters.bind(this);
        this.state = {
            colFilterName: props.colFilterName,
            cssClasses: props.cssClasses + ' ml-1',
            options: props.options,
            selectedOption: props.selectedOption,
            pubSubSubscriber: props.pubSubSubscriber,
            pubSubEvent: props.pubSubEvent
        };

        this.state.pubSubSubscriber(this.state.pubSubEvent, this.handlePubSubClearFilters);
    }

    handlePubSubClearFilters() {
        this.setState({ selectedOption: "" });
    }

    handleChangeSelected(event) {
        this.setState({ selectedOption: event.target.value });
    }

    getSelectReact() {
        var selectOptions = [];
        this.state.options.o.map((option, i) =>
            selectOptions.push(
                React.createElement("option", { value: option.value, key: 'col-filter-' + this.state.colFilterName + '-' + i }, option.label)));

        return React.createElement("select", { className: this.state.cssClasses, value: this.state.selectedOption, onChange: this.handleChangeSelected}, selectOptions);
    }

    render() {
        return this.getSelectReact();
    }
}