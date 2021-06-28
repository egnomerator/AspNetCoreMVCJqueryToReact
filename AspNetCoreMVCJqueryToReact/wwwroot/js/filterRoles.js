function RenderFilterRoles(roles) {
    renderRolesDropdown(roles);
}

function GetFilterRoles() {
    return ajaxRequest("get", "/Table/GetFilterRoles");
}

function renderRolesDropdown(roles) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Role', selected: 'selected="selected"' },
            { value: roles.wildcard, label: roles.wildcard, selected: '' },
            { value: roles.plans, label: roles.plans, selected: '' },
            { value: roles.theLooks, label: roles.theLooks, selected: '' },
            { value: roles.jokes, label: roles.jokes, selected: '' },
            { value: roles.theMoney, label: roles.theMoney, selected: '' }
        ]
    }

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            { colFilterName: "Role", cssClasses: "crew-column-filter custom-select custom-select-sm", options: selectOptions }
        ),
        document.getElementById("filter-roles")
    )
}