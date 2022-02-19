var crewTable;
var emptyTableMessage;
registeredInitializations.loadTableArea.push(loadTableArea);
var numSeed = "";

function getNums() {
    var nums = {
        one: "1" + numSeed,
        two: "2" + numSeed,
        three: "3" + numSeed,
        four: "4" + numSeed,
        five: "5" + numSeed,
        six: "6" + numSeed,
        seven: "7" + numSeed,
        eight: "8" + numSeed,
    }
    if (numSeed === "") { numSeed = "0";}
    var currentSeedVal = Number(numSeed);
    var nextSeedVal = currentSeedVal + 1;
    numSeed = nextSeedVal.toString();
    return nums;
}

function loadTableArea() {
    $.when(
        ajaxRequest("get", "/Table/GetColumnFilterOptions")
    ).done(function (filterOptions) {
        RenderFilterNames(filterOptions.names);
        RenderFilterRoles(filterOptions.roles);
        RenderFilterJobs(filterOptions.jobs);
        RenderFilterNums(getNums());
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

        $('#reRenderFiltersButton, #reRenderFiltersButton2').click(function () {
            //deleteAllFilters();
            RenderFilterNames(filterOptions.names);
            RenderFilterRoles(filterOptions.roles);
            RenderFilterJobs(filterOptions.jobs);
            if ($(this).attr("id") === "reRenderFiltersButton") {
                RenderFilterNums(getNums(), null);
                RenderClearFilters();
            }
            if ($(this).attr("id") === "reRenderFiltersButton2") {
                RenderFilterNums(null, filterOptions.jobs);
                RenderClearFilters(filterOptions.jobs);
            }            
            $("select.crew-column-filter").change(function () {
                showHideClearFilters();
                reloadTable();
            });

            $('#clearFilters').click(function () {
                clearFilters();
                reloadTable();
            });
        });
    });
}

function deleteAllFilters() {
    $('#columnFiltersContainer')
        .html(
            "<div id=\"filter-names\"></div>" +
            "<div id=\"filter-roles\"></div>" +
            "<div id=\"filter-jobs\"></div>" +
            "<div id=\"clearFilters\"></div>");
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
        Number: $('#filter-nums select').val(),
        AnyIsActive: function () {
            var nameIsActive = this.Name && this.Name !== "";
            var roleIsActive = this.Role && this.Role !== "";
            var jobIsActive = this.Job && this.Job !== "";
            var numIsActive = this.Number && this.Number !== "";
            return nameIsActive || roleIsActive || jobIsActive || numIsActive;
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
