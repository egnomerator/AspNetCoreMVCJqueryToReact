function RenderClearFilters(jobs) {
    if (!jobs) renderClearFiltersButton();
    if (jobs) renderJobsDropdown3(jobs);
}

function renderClearFiltersButton() {
    var props = {
        cssClasses: "btn text-primary p-0 ml-3",
        label: "Clear Filters",
        showClearFilters: false,
        pubSubSubscriber: ClientApp.PubSub.subscribe,
        pubSubEvent: ClientApp.PubSub.eventRegister.columnFiltersChanged
    };
    var container = document.getElementById("clearFilters");
    ClientApp.Components.renderClearFiltersButton(container, props);
}

function renderJobsDropdown3(jobs) {
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
    var container = document.getElementById("clearFilters");

    ClientApp.Components.renderSelect(
        container,
        props.colFilterName,
        props.cssClasses,
        props.options,
        props.selectedOption,
        props.pubSubSubscriber,
        props.pubSubEvent);
}
