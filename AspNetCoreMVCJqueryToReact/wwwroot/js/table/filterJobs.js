function RenderFilterJobs(jobs) {
    renderJobsDropdown(jobs)
}

function renderJobsDropdown(jobs) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Job' },
            { value: jobs.janitor, label: jobs.janitor },
            { value: jobs.security, label: jobs.security },
            { value: jobs.barTender, label: jobs.barTender },
            { value: jobs.owner, label: jobs.owner }
        ]
    };
    var props = {
        colFilterName: "Job",
        cssClasses: "crew-column-filter custom-select custom-select-sm",
        options: selectOptions,
        selectedOption: "",
        pubSubSubscriber: ClientApp.PubSub.subscribe,
        pubSubEvent: ClientApp.PubSub.eventRegister.clearColumnFilters
    };
    var container = document.getElementById("filter-jobs");
    
    ClientApp.Components.renderSelect(
        container,
        props.colFilterName,
        props.cssClasses,
        props.options,
        props.selectedOption,
        props.pubSubSubscriber,
        props.pubSubEvent);
}
