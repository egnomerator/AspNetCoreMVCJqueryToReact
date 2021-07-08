function RenderFilterRoles(roles) {
    var html =
        '<select class="crew-column-filter custom-select custom-select-sm">' +
        '<option selected="selected" value="">Select a Role</option>' +
        '<option value="' + roles.wildcard + '">' + roles.wildcard + '</option>' +
        '<option value="' + roles.plans + '">' + roles.plans + '</option>' +
        '<option value="' + roles.theLooks + '">' + roles.theLooks + '</option>' +
        '<option value="' + roles.jokes + '">' + roles.jokes + '</option>' +
        '<option value="' + roles.theMoney + '">' + roles.theMoney + '</option>' +
        '</select>';
    var contianer = document.getElementById("filter-roles");
    contianer.innerHTML = html;
}
