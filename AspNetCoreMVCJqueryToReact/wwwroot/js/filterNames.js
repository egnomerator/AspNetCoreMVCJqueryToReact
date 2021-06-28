function RenderFilterNames(names) {
    renderNamesDropdown(names);
}

function GetFilterNames() {
    return ajaxRequest("get", "/Table/GetFilterNames");
}

function renderNamesDropdown(names) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Name', selected: 'selected="selected"' },
            { value: names.charlie, label: names.charlie, selected: '' },
            { value: names.mac, label: names.mac, selected: '' },
            { value: names.dennis, label: names.dennis, selected: '' },
            { value: names.dee, label: names.dee, selected: '' },
            { value: names.frank, label: names.frank, selected: '' }
        ]
    }

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            { colFilterName: "Name", cssClasses: "crew-column-filter custom-select custom-select-sm", options: selectOptions }
        ),
        document.getElementById("filter-names")
    )
}