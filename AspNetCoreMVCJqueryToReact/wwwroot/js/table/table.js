var crewTable;
var emptyTableMessage;
registeredInitializations.loadTableArea.push(loadTableArea);

function loadTableArea() {
    $.when(
        ajaxRequest("get", "/Table/GetColumnFilterOptions")
    ).done(function (filterOptions) {
        RenderColumnFilters(filterOptions);
        crewTable = setupCrewTable();
        pubSub.subscribe(pubSub.eventRegister.columnFiltersChanged, reloadTable);
    });
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
    pubSub.publish(pubSub.eventRegister.clearColumnFilters);
}

function reloadTable() {
    crewTable.ajax.reload();
}
