function RenderFilterNames(names) {
    var html =
        '<select class="crew-column-filter custom-select custom-select-sm">' +
            '<option selected="selected" value="">Select a Name</option>' +
            '<option value="' + names.charlie + '">' + names.charlie + '</option>' +
            '<option value="' + names.mac + '">' + names.mac + '</option>' +
            '<option value="' + names.dennis + '">' + names.dennis + '</option>' +
            '<option value="' + names.dee + '">' + names.dee + '</option>' +
            '<option value="' + names.frank + '">' + names.frank + '</option>' +
        '</select>';
    var contianer = document.getElementById("filter-names");
    contianer.innerHTML = html;
}

function GetFilterNames() {
    return ajaxRequest("get", "/Table/GetFilterNames");
}