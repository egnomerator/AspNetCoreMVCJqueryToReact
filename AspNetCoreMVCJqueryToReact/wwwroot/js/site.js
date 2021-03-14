$(document).ready(function () {
    crewTable = setupCrewTable();
    showHideClearFilters();
    renderFooter();
    $("select.crew-column-filter").change(function () {
        showHideClearFilters();
        reloadTable();
    });

    $('#clearFilters').click(function () {
        clearFilters();
        reloadTable();
    });
});
