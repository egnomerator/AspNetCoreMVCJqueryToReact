$(document).ready(function () {
    crewTable = setupCrewTable();
    renderFooter();
});

$("select").change(function () {
    showHideClearFilters();
    reloadTable();
});

$('#clearFilters').click(function () {
    clearFilters();
    reloadTable();
});
