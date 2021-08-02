emptyTableMessage = (function(){

    function renderMessage(columnFilters, clearFiltersCallback) {
        var currentColFilters = new currentColumnFilters(columnFilters);
        renderMessageElement(currentColFilters, clearFiltersCallback);
    }

    function renderMessageElement(columnFilters, clearFiltersCallback) {
        var colFiltersMsg = getFiltersList(columnFilters);
        var msg = document.createElement('span');
        msg.className = "";
        if (colFiltersMsg === "") {
            msg.innerHTML = defaultEmptyTableMessage;
            messageElement = msg;
            return;
        }

        var a = getAnchor(clearFiltersCallback);
        msg.innerHTML = "Column Filter(s) currently set - " + colFiltersMsg + " - ";
        msg.appendChild(a);
        messageElement = msg;
    }

    function getAnchor(clearFiltersCallback) {
        var a = document.createElement('a');
        a.className = "text-primary";
        a.innerHTML = "click here to clear column filters";
        a.onclick = function () {
            clearFiltersCallback();
        };

        return a;
    }

    function getFiltersList(columnFilters) {
        var activeFilters = [];
        if (columnFilters.name && columnFilters.name !== "") activeFilters.push("Name:" + columnFilters.name);
        if (columnFilters.role && columnFilters.role !== "") activeFilters.push("Role:" + columnFilters.role);
        if (columnFilters.job && columnFilters.job !== "") activeFilters.push("Job:" + columnFilters.job);

        return activeFilters.join(", ");
    }

    function currentColumnFilters(columnFilters) {
        this.name = columnFilters.Name;
        this.role = columnFilters.Role;
        this.job = columnFilters.Job;
    }

    function clearMessage() {
        messageElement = null;
    }

    var defaultEmptyTableMessage = "No crew members meet your search criteria.";
    var messageElement = null;

    return {
        render: function (columnFilters, clearFiltersCallback) {
            clearMessage();
            renderMessage(columnFilters, clearFiltersCallback);
        },
        get: function () { return messageElement; },
        clear: function () { clearMessage(); }
    }
})();