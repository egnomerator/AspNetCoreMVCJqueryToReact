$(document).ready(function () {
    crewTable = setupCrewTable();
    showHideClearFilters();

    $("select.crew-column-filter").change(function () {
        showHideClearFilters();
        reloadTable();
    });

    $('#clearFilters').click(function () {
        clearFilters();
        reloadTable();
    });
});
