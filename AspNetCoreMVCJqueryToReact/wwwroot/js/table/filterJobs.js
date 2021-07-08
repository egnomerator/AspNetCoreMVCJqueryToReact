function RenderFilterJobs(jobs) {
    renderJobsDropdown(jobs)
}

function renderJobsDropdown(jobs) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Job', selected: 'selected="selected"' },
            { value: jobs.janitor, label: jobs.janitor, selected: '' },
            { value: jobs.security, label: jobs.security, selected: '' },
            { value: jobs.barTender, label: jobs.barTender, selected: '' },
            { value: jobs.owner, label: jobs.owner, selected: '' }
        ]
    }

    ReactDOM.render(
        React.createElement(
            SelectSimple,
            { colFilterName: "Job", cssClasses: "crew-column-filter custom-select custom-select-sm", options: selectOptions }
        ),
        document.getElementById("filter-jobs")
    )
}