﻿import React from "react";
import ReactDOM from "react-dom";
import FooterMsgPart from "./layout/Footer";
import SelectSimple from "./table/SelectSimple";
import ClearFilters from "./table/ClearFilters";

function renderFooter(container) {
    var html =
        '<footer class="border-top footer text-muted">' +
        '<div class="container">' +
        //'&copy; 2021 - AspNetCoreMVCJqueryToReact'+
        '&copy;<span class="container"></span>'
    '</div>' +
        '</footer>'
    $('#footer-container').html(html);
    ReactDOM.render(
        React.createElement(FooterMsgPart),
        container
    )
}

function renderSelect(container, props) {
    ReactDOM.render(
        React.createElement(SelectSimple, props),
        container
    )
}

function renderClearFiltersButton(container, props) {
    ReactDOM.render(
        React.createElement(ClearFilters, props),
        container
    )
}

var ComponentApi = {
    renderFooter: function (container) { renderFooter(container);},
    renderSelect: function (container, props) { renderSelect(container, props); },
    renderClearFiltersButton: function (container, props) { renderClearFiltersButton(container, props); }
};

export default ComponentApi;