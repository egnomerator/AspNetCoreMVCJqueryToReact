import React from "react";
import ReactDOM from "react-dom";
import FooterMsgPart from "../components/layout/Footer";
import SelectSimple from "../components/table/SelectSimple";
import ClearFilters from "../components/table/ClearFilters";

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
        React.createElement(SelectSimple,props),
        container
    )
}

function renderClearFiltersButton(container, props) {
    ReactDOM.render(
        React.createElement(ClearFilters,props),
        container
    )
}

export { renderFooter, renderSelect, renderClearFiltersButton }