function RenderFilterRoles(roles) {
    renderRolesDropdown(roles);
}

function renderRolesDropdown(roles) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Role' },
            { value: roles.wildcard, label: roles.wildcard },
            { value: roles.plans, label: roles.plans },
            { value: roles.theLooks, label: roles.theLooks },
            { value: roles.jokes, label: roles.jokes },
            { value: roles.theMoney, label: roles.theMoney }
        ]
    }

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            {
                colFilterName: "Role",
                cssClasses: "crew-column-filter custom-select custom-select-sm",
                options: selectOptions,
                selectedOption: ""
            }
        ),
        document.getElementById("filter-roles")
    )
}