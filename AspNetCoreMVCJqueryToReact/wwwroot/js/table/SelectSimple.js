class SelectSimple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colFilterName: props.colFilterName,
            cssClasses: props.cssClasses + ' ml-1',
            options: props.options
        };
    }

    render() {
        var selectOptions = '';
        this.state.options.o.map((option, i) => {
            var selectedText = option.selected === '' ? ' ' : ' ' + option.selected + ' ';
            selectOptions += '<option key="' + 'col-filter-' + this.state.colFilterName + '-' + i + '"' + selectedText + 'value="' + option.value + '">' + option.label + '</option>'
        });

        var select =
            '<select class="' + this.state.cssClasses + '">' +
            selectOptions +
            '</select>';
        var el = React.createElement("div", { dangerouslySetInnerHTML: { __html: select } });

        return el;
    }
}