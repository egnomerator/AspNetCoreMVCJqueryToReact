$(document).ready(function () {
    table = $('#table')
        .DataTable({
            scrollY: "525px",
            scrollCollapse: true,
            paging: true,
            searching: true,
            info: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: "/Table/GetTheCrew",
                type: "POST",
                contentType: "application/json",
                dataType:"json",
                data: function (drawCriteria) {
                    return JSON.stringify(drawCriteria);
                },
                dataSrc: function (json) {
                    return json.data;
                },
                error: function (xhr, textStatus, errorThrown) { }
            },
            //dom: 'rtlip',
            //lengthChange: false,
            //pageLength: 10,
            //language: {
            //},
            createdRow: function (row, data, dataIndex) { },
            columns: [
                { data: "name" },
                { data: "role" },
                { data: "job" }
            ]
        });
});