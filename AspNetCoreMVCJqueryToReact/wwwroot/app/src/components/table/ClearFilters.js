import React from "react";

export default class ClearFilters extends React.Component {
    constructor(props) {
        super(props);

        this.handleColumnFiltersChanged = this.handleColumnFiltersChanged.bind(this);
        this.state = {
            showClearFilters: props.showClearFilters
        };

        this.unsubscribers = [];
    }

    componentDidMount() {
        var unsubscriber = this.props.pubSubSubscriber(this.props.pubSubEvent, this.handleColumnFiltersChanged);
        this.unsubscribers.push(unsubscriber);
    }

    componentWillUnmount() {
        this.unsubscribers.map((unsubscribe, i) => { unsubscribe(); });
    }

    handleColumnFiltersChanged(showClearFilters) {
        this.setState({ showClearFilters: showClearFilters });
    }

    getClearFiltersReact() {

        if (!this.state.showClearFilters) return null;

        return React.createElement(
            "a",
            { className: this.props.cssClasses },
            this.props.label);
    }

    render() {
        return this.getClearFiltersReact();
    }
}