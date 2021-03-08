function setupCrewTable() {
    return $('#table')
        .on('xhr.dt', function (e, settings, json, xhr) {
            emptyTableMessage.clear();
            if (json.recordsFiltered < 1) emptyTableMessage.render(getColumnFilters(), clearFilters, reloadTable);
        })
        .DataTable({
            scrollY: "450px",
            scrollCollapse: false,
            paging: true,
            searching: true,
            info: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: "/Table/GetTheCrew",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: function (drawCriteria) {
                    drawCriteria.columnFilters = getColumnFilters();
                    return JSON.stringify(drawCriteria);
                },
                dataSrc: function (json) {
                    return json.data;
                },
                error: function (xhr, textStatus, errorThrown) { }
            },
            dom: '<"row form-inline mt-2 mb-2"<"col-sm-12 col-md-6"<"float-left"l>><"col-sm-12 col-md-6"<"float-right"f>>>' +
                '<"row"<"col-sm-12"t>>' +
                '<"row form-inline mt-2 mb-2"<"col-sm-12 col-md-5"<"float-left"i>><"col-sm-12 col-md-7"<"float-right"p>>>',
            //lengthChange: false,
            //pageLength: 10,
            language: {
                //emptyTable: function () { return emptyTableMessage.get(); },
                zeroRecords: function () { return emptyTableMessage.get(); }
            },
            createdRow: function (row, data, dataIndex) { },
            columns: [
                { data: "name" },
                { data: "role" },
                { data: "job" }
            ]
        });
}
