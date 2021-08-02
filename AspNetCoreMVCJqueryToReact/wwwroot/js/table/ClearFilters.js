class ClearFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    getClearFiltersReact() {
        return React.createElement(
            "a",
            { className: this.props.cssClasses, onClick: this.props.onClick },
            this.props.label);
    }

    render() {
        return this.getClearFiltersReact();
    }
}