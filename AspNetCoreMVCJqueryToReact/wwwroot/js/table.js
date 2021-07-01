var crewTable;
var emptyTableMessage;

registeredInitializations.loadTableArea.push(loadTableArea);

function loadTableArea() {
    $.when(
        GetFilterNames(),
        GetFilterRoles(),
        GetFilterJobs()
    ).done(function (names, roles, jobs) {
        RenderFilterNames(names[0]);
        RenderFilterRoles(roles[0]);
        RenderFilterJobs(jobs[0]);
        showHideClearFilters();
        crewTable = setupCrewTable();
        $("select.crew-column-filter").change(function () {
            showHideClearFilters();
            reloadTable();
        });

        $('#clearFilters').click(function () {
            clearFilters();
            reloadTable();
        });
    });
}

function showHideClearFilters() {
    var showClearFilters = getColumnFilters().AnyIsActive();
    if (showClearFilters) $('#clearFilters').show();
    if (!showClearFilters) $('#clearFilters').hide();
}

function getColumnFilters() {
    return {
        Name: $('#filter-names select').val(),
        Role: $('#filter-roles select').val(),
        Job: $('#filter-jobs select').val(),
        AnyIsActive: function () {
            var nameIsActive = this.Name && this.Name !== "";
            var roleIsActive = this.Role && this.Role !== "";
            var jobIsActive = this.Job && this.Job !== "";
            return nameIsActive || roleIsActive || jobIsActive;
        }
    }
}

function clearFilters() {
    var newFilterValue = "";

    pubSub.publish(pubSub.eventRegister.newColFilterName, newFilterValue);
    pubSub.publish(pubSub.eventRegister.newColFilterRole, newFilterValue);
    pubSub.publish(pubSub.eventRegister.newColFilterJob, newFilterValue);

    showHideClearFilters();
}

function reloadTable() {
    crewTable.ajax.reload();
}
