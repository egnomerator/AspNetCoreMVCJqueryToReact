function RenderFilterJobs(jobs) {
    renderJobsDropdown(jobs)
}

function GetFilterJobs() {
    return ajaxRequest("get", "/Table/GetFilterjobs");
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
    }

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            {
                colFilterName: "Job",
                cssClasses: "crew-column-filter custom-select custom-select-sm",
                options: selectOptions,
                selectedOption: "",
                pubSubSubscriber: pubSub.subscribe,
                pubSubEvent: pubSub.eventRegister.newColFilterJob
            }
        ),
        document.getElementById("filter-jobs")
    )
}