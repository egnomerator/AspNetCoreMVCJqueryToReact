import * as React from "react";
import * as ReactDOM from "react-dom";
import FooterMsgPart from "./layout/Footer";
import { SelectSimple, SelectSimpleProps } from "./table/SelectSimple";
import ClearFilters from "./table/ClearFilters";

function renderFooter(container: Element) {
    ReactDOM.render(
        <FooterMsgPart />,
        container
    );
}

function renderSelect(container: Element, props: SelectSimpleProps) {
    ReactDOM.render(
        <SelectSimple {...props} />,
        container
    );
}

function renderClearFiltersButton(container: Element, props) {
    ReactDOM.render(
        <ClearFilters {...props} />,
        container
    );
}

function removeInMemoryDomNode(container: Element) {
    ReactDOM.unmountComponentAtNode(container);
}

const Components = {
    removeInMemoryDomNode: function (container: Element) { removeInMemoryDomNode(container); },
    renderFooter: function (container: Element) { renderFooter(container); },
    renderSelect: function (
        container: Element,
        colFilterName: string,
        cssClasses: string,
        options: any,
        selectedOption: string,
        pubSubSubscriber: ((event: string, handler: Function) => Function),
        pubSubEvent: string) {

        const componentProps: SelectSimpleProps = {
            colFilterName: colFilterName,
            cssClasses: cssClasses,
            options: options,
            selectedOption: selectedOption,
            pubSubSubscriber: pubSubSubscriber,
            pubSubEvent: pubSubEvent
        }
        renderSelect(container, componentProps);
    },
    renderClearFiltersButton: function (container: Element, props) { renderClearFiltersButton(container, props); }
};

export default Components;
