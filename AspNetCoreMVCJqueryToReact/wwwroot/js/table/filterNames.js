function CreateFilterNames(props) {
    return React.createElement(
        SelectSimple,
        props
    );
}

function GetFilterNamesOptions(names) {
    return {
        o: [
            { value: '', label: 'Select a Name' },
            { value: names.charlie, label: names.charlie },
            { value: names.mac, label: names.mac },
            { value: names.dennis, label: names.dennis },
            { value: names.dee, label: names.dee },
            { value: names.frank, label: names.frank }
        ]
    };
}