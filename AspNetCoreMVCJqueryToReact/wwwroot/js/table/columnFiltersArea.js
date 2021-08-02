function RenderColumnFilters(filterOptions) {
    ReactDOM.render(
        React.createElement(
            ColumnFilters,
            {
                filterOptions: filterOptions,
                pubSubSubscriber: pubSub.subscribe,
                subscribeEventClearFilters: pubSub.eventRegister.clearColumnFilters,
                pubSubPublisher: pubSub.publish,
                publishEventFiltersChanged: pubSub.eventRegister.columnFiltersChanged
            }
        ),
        document.getElementById("columnFiltersContainer")
    );
}
