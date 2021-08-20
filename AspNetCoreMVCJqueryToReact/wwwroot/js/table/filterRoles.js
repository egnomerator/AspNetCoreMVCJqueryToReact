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
    };
    var props = {
        colFilterName: "Role",
        cssClasses: "crew-column-filter custom-select custom-select-sm",
        options: selectOptions,
        selectedOption: "",
        pubSubSubscriber: pubSub.subscribe,
        pubSubEvent: pubSub.eventRegister.clearColumnFilters
    };
    var container = document.getElementById("filter-roles");
    ComponentApi.renderSelect(container, props);
}