var crewTable;
var emptyTableMessage;
registeredInitializations.loadTableArea.push(loadTableArea);

function loadTableArea() {
    $.when(
        ajaxRequest("get", "/Table/GetColumnFilterOptions")
    ).done(function (filterOptions) {
        RenderFilterNames(filterOptions.names);
        RenderFilterRoles(filterOptions.roles);
        RenderFilterJobs(filterOptions.jobs);
        RenderClearFilters();
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
    ClientApp.PubSub.publish(ClientApp.PubSub.eventRegister.columnFiltersChanged, showClearFilters);
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
    ClientApp.PubSub.publish(ClientApp.PubSub.eventRegister.clearColumnFilters);
    showHideClearFilters();
}

function reloadTable() {
    crewTable.ajax.reload();
}
