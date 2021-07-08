function RenderFilterNames(names) {
    renderNamesDropdown(names);
}

function renderNamesDropdown(names) {
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

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            {
                colFilterName: "Name",
                cssClasses: "crew-column-filter custom-select custom-select-sm",
                options: selectOptions,
                selectedOption: ""
            }
        ),
        document.getElementById("filter-names")
    )
}