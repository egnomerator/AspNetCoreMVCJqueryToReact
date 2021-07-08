function RenderFilterJobs(jobs) {
    var html =
        '<select class="crew-column-filter custom-select custom-select-sm">' +
        '<option selected="selected" value="">Select a Job</option>' +
        '<option value="' + jobs.janitor + '">' + jobs.janitor + '</option>' +
        '<option value="' + jobs.security + '">' + jobs.security + '</option>' +
        '<option value="' + jobs.barTender + '">' + jobs.barTender + '</option>' +
        '<option value="' + jobs.owner + '">' + jobs.owner + '</option>' +
        '</select>';
    var contianer = document.getElementById("filter-jobs");
    contianer.innerHTML = html;
}

function GetFilterJobs() {
    return ajaxRequest("get", "/Table/GetFilterjobs");
}