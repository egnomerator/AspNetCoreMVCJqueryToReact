$(document).ready(function () {
    table = $('#table')
        .DataTable({
            paging: true,
            searching: true,
            info: true,
            processing: true,
            serverSide: true,
            ajax: {
                url: "/Table/GetTheGang",
                type: "POST",
                contentType: "application/json",
                dataType:"json",
                //headers
                data: function (drawCriteria) {
                    //var data = {
                    //    TableDraw: drawCriteria.draw,
                    //    Start: drawCriteria.start,
                    //    Length: drawCriteria.length,
                    //    SearchText: ""
                    //};

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