import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render", () => {
        const expectedTag = "span";
        const expectedText = "2021 - AspNetCoreMVCJqueryToReact";

        const footer = ReactTestRenderer.create(React.createElement(Footer));
        const footerValue = footer.toJSON();

        expect(footerValue.type).toBe(expectedTag);
        expect(footerValue.children.length).toBe(1);
        expect(footerValue.children[0]).toBe(expectedText);
    });
});
