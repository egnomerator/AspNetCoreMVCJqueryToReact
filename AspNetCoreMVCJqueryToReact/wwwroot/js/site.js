$(document).ready(function () {
    crewTable = setupCrewTable();
});

$("select").change(function () {
    showHideClearFilters();
    reloadTable();
});

$('#clearFilters').click(function () {
    clearFilters();
    reloadTable();
});
