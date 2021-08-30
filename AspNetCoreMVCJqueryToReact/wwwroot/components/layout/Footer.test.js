import React from "react";
import ReactTestRenderer from "react-test-renderer";
import Footer from "../layout/Footer";

describe("Footer", () => {
    it("should render as footer string value", () => {
        const expectedFooterValue = "2021 - AspNetCoreMVCJqueryToReact";

        const footer = ReactTestRenderer.create(React.createElement(Footer));
        const footerValue = footer.toJSON();

        expect(footerValue).toBe(expectedFooterValue);
    });
});
