import * as React from "react";

export interface SelectSimpleProps {
    colFilterName: string;
    cssClasses: string;
    options: any;
    selectedOption: string;
    pubSubSubscriber(event: string, handler: Function): Function;
    pubSubEvent: string;
}

interface SelectSimpleState {
    selectedOption: string;
}

export class SelectSimple extends React.Component<SelectSimpleProps, SelectSimpleState> {
    unsubscribers = [];

    constructor(props: SelectSimpleProps) {
        super(props);

        this.handleChangeSelected = this.handleChangeSelected.bind(this);
        this.handlePubSubClearFilters = this.handlePubSubClearFilters.bind(this);
        this.state = {
            selectedOption: props.selectedOption
        };

        this.unsubscribers = [];
    }

    componentDidMount() {
        const unsubscriber = this.props.pubSubSubscriber(this.props.pubSubEvent, this.handlePubSubClearFilters);
        this.unsubscribers.push(unsubscriber);
    }

    componentWillUnmount() {
        this.unsubscribers.map((unsubscribe, i) => { unsubscribe(); });
    }

    handlePubSubClearFilters() {
        this.setState({ selectedOption: "" });
    }

    handleChangeSelected(event) {
        this.setState({ selectedOption: event.target.value });
    }

    getSelectReact() {
        const selectOptions = [];
        this.props.options.o.map((option, i) =>
            selectOptions.push(<option key={'col-filter-' + this.props.colFilterName + '-' + i} value={option.value}>{option.label}</option>));

        return <select className={this.props.cssClasses + ' ml-1'} value={this.state.selectedOption} onChange={this.handleChangeSelected}>{selectOptions}</select>;
    }

    render() {
        return this.getSelectReact();
    }
}
