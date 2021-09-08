import React from "react";
import ReactDOM from "react-dom";
import FooterMsgPart from "./layout/Footer";
import SelectSimple from "./table/SelectSimple";
import ClearFilters from "./table/ClearFilters";

function renderFooter(container) {
    ReactDOM.render(
        <FooterMsgPart/>,
        container
    )
}

function renderSelect(container, props) {
    ReactDOM.render(
        <SelectSimple {...props}/>,
        container
    )
}

function renderClearFiltersButton(container, props) {
    ReactDOM.render(
        <ClearFilters {...props}/>,
        container
    )
}

var ComponentApi = {
    renderFooter: function (container) { renderFooter(container);},
    renderSelect: function (container, props) { renderSelect(container, props); },
    renderClearFiltersButton: function (container, props) { renderClearFiltersButton(container, props); }
};

export default ComponentApi;
