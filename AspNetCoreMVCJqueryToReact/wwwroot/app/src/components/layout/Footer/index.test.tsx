import * as React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import Footer from ".";

describe("Footer", () => {
    it("should render", () => {
        const expectedTag = "span";
        const expectedText = "2021 - AspNetCoreMVCJqueryToReact";

        const footer = ReactTestRenderer.create(<Footer/>);
        const footerValue = footer.toJSON() as ReactTestRenderer.ReactTestRendererJSON;

        expect(footerValue.type).toBe(expectedTag);
        expect(footerValue.children.length).toBe(1);
        expect(footerValue.children[0]).toBe(expectedText);
    });
});
