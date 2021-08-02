function CreateFilterJobs(jobs) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Job' },
            { value: jobs.janitor, label: jobs.janitor },
            { value: jobs.security, label: jobs.security },
            { value: jobs.barTender, label: jobs.barTender },
            { value: jobs.owner, label: jobs.owner }
        ]
    }

    return React.createElement(
        SelectSimple,
        {
            colFilterName: "Job",
            cssClasses: "crew-column-filter custom-select custom-select-sm",
            options: selectOptions,
            selectedOption: "",
            pubSubSubscriber: pubSub.subscribe,
            pubSubEvent: pubSub.eventRegister.clearColumnFilters
        }
    );
}
