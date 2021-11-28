import * as React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import Footer from ".";

describe("Footer", () => {
    it("should render", () => {
        const footer = ReactTestRenderer.create(<Footer/>);

        expect(footer).toMatchSnapshot();
    });
});
