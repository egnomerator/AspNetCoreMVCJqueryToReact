$(document).ready(function () {
    renderFooter();
    listenAll();
});

function listenAll() {
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