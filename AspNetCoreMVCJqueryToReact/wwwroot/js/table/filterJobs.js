function CreateFilterJobs(props) {
    return React.createElement(
        SelectSimple,
        props
    );
}

function GetFilterJobsOptions(jobs) {
    return {
        o: [
            { value: '', label: 'Select a Job' },
            { value: jobs.janitor, label: jobs.janitor },
            { value: jobs.security, label: jobs.security },
            { value: jobs.barTender, label: jobs.barTender },
            { value: jobs.owner, label: jobs.owner }
        ]
    };
}