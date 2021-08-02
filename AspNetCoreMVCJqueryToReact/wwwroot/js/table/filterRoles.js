function CreateFilterRoles(props) {
    return React.createElement(
        SelectSimple,
        props
    );
}

function GetFilterRolesOptions(roles) {
    return {
        o: [
            { value: '', label: 'Select a Role' },
            { value: roles.wildcard, label: roles.wildcard },
            { value: roles.plans, label: roles.plans },
            { value: roles.theLooks, label: roles.theLooks },
            { value: roles.jokes, label: roles.jokes },
            { value: roles.theMoney, label: roles.theMoney }
        ]
    };
}