function RenderFilterNums(nums, jobs) {
    if (nums) renderNumsDropdown(nums);
    if (jobs) renderClearFiltersButton2(); //renderJobsDropdown2(jobs);
}

function renderNumsDropdown(nums) {
    var selectOptions = {
        o: [
            { value: '', label: 'Select a Number' },
            { value: nums.one, label: nums.one },
            { value: nums.two, label: nums.two },
            { value: nums.three, label: nums.three },
            { value: nums.four, label: nums.four },
            { value: nums.five, label: nums.five },
            { value: nums.six, label: nums.six },
            { value: nums.seven, label: nums.seven },
            { value: nums.eight, label: nums.eight }
        ]
    };
    var props = {
        colFilterName: "Number",
        cssClasses: "crew-column-filter custom-select custom-select-sm",
        options: selectOptions,
        selectedOption: "",
        pubSubSubscriber: ClientApp.PubSub.subscribe,
        pubSubEvent: ClientApp.PubSub.eventRegister.clearColumnFilters
    };
    var container = document.getElementById("filter-nums");

    ClientApp.Components.renderSelect(
        container,
        props.colFilterName,
        props.cssClasses,
        props.options,
        props.selectedOption,
        props.pubSubSubscriber,
        props.pubSubEvent);
}

function renderJobsDropdown2(jobs) {
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
    var container = document.getElementById("filter-nums");

    ClientApp.Components.renderSelect(
        container,
        props.colFilterName,
        props.cssClasses,
        props.options,
        props.selectedOption,
        props.pubSubSubscriber,
        props.pubSubEvent);
}

function renderClearFiltersButton2() {
    var props = {
        cssClasses: "btn text-primary p-0 ml-3",
        label: "Clear Filters",
        showClearFilters: false,
        pubSubSubscriber: ClientApp.PubSub.subscribe,
        pubSubEvent: ClientApp.PubSub.eventRegister.columnFiltersChanged
    };
    var container = document.getElementById("filter-nums");
    ClientApp.Components.renderClearFiltersButton(container, props);
}
