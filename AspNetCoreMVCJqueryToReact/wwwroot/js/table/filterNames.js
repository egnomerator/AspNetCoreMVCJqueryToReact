function CreateFilterNames(names) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Name' },
            { value: names.charlie, label: names.charlie },
            { value: names.mac, label: names.mac },
            { value: names.dennis, label: names.dennis },
            { value: names.dee, label: names.dee },
            { value: names.frank, label: names.frank }
        ]
    }

    return React.createElement(
        SelectSimple,
        {
            colFilterName: "Name",
            cssClasses: "crew-column-filter custom-select custom-select-sm",
            options: selectOptions,
            selectedOption: "",
            pubSubSubscriber: pubSub.subscribe,
            pubSubEvent: pubSub.eventRegister.clearColumnFilters
        }
    );
}
