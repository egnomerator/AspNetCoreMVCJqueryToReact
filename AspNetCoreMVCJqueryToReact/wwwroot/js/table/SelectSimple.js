class SelectSimple extends React.Component {
    constructor(props) {
        super(props);
    }

    getSelectReact() {
        var selectOptions = [];
        this.props.options.o.map((option, i) =>
            selectOptions.push(
                React.createElement("option", { value: option.value, key: 'col-filter-' + this.props.colFilterName + '-' + i }, option.label)));

        return React.createElement("select", { className: this.props.cssClasses + ' ml-1', value: this.props.selectedOption, onChange: this.props.onChange }, selectOptions);
    }

    render() {
        return this.getSelectReact();
    }
}