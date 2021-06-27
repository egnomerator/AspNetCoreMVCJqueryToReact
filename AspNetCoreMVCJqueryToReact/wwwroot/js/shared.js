var crewTable;
var emptyTableMessage;

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
    $('select.crew-column-filter').val("");
    showHideClearFilters();
}

function reloadTable() {
    crewTable.ajax.reload();
}

function renderFooter() {
    var html =
    '<footer class="border-top footer text-muted">'+
        '<div class="container">'+
            //'&copy; 2021 - AspNetCoreMVCJqueryToReact'+
            '&copy;<span class="container"></span>'
        '</div>'+
    '</footer>'
    $('#footer-container').html(html);
    ReactDOM.render(
        React.createElement(FooterMsgPart),
        document.querySelector("#footer-container div.container span.container")
    )
}

class FooterMsgPart extends React.Component {
    render() {
        return '2021 - AspNetCoreMVCJqueryToReact'
    }
}

function ajaxRequest(httpMethod, url, onSuccess) {
    return $.ajax({
        type: httpMethod,
        url: url
    });
}
