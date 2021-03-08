var crewTable;
var emptyTableMessage;

function showHideClearFilters() {
    var showClearFilters = getColumnFilters().AnyIsActive();
    if (showClearFilters) $('#clearFilters').show();
    if (!showClearFilters) $('#clearFilters').hide();
}

function getColumnFilters() {
    return {
        Name: $('select').eq(0).val(),
        Role: $('select').eq(1).val(),
        Job: $('select').eq(2).val(),
        AnyIsActive: function () {
            return this.Name !== "" || this.Role !== "" || this.Job !== "";
        }
    }
}

function clearFilters() {
    $('select.crew-column-filter').val("");
    showHideClearFilters();
}

function reloadTable() {
    crewTable.ajax.reload();
}
