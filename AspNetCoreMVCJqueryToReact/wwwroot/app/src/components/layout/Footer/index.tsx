import * as React from "react";

export default class FooterMsgPart extends React.Component {
    render() {

        // Babel converts JSX HTML entities to unicode
        //  - Babel converts & copy; to \xA9
        //  - then JS converts this \xA9 escape sequence to the symbol
        //  - the browser DOM receives the symbol and displays it
        return <span>&copy; 2021 - AspNetCoreMVCJqueryToReact</span>; // browser displays symbol
        // - Babel converts above line to => React.createElement("span", null, "\xA9 2021 - AspNetCoreMVCJqueryToReact")

        // SIMILAR TO ABOVE JSX
        //return <span>\xA9 2021 - AspNetCoreMVCJqueryToReact</span>; // browser displays unicode escape sequence "\xa9"
        //return <span>{"&copy; 2021 - AspNetCoreMVCJqueryToReact"}</span>; // browser displays raw html entity
        //return <span>{"\xA9 2021 - AspNetCoreMVCJqueryToReact"}</span>; // browser displays symbol

        // WITHOUT JSX ...

        //return React.createElement("span", null, "&copy; 2021 - AspNetCoreMVCJqueryToReact"); // browser displays raw html entity

        // JavaScript converts to copyright symbol
        //return React.createElement("span", null, "\u00a9 2021 - AspNetCoreMVCJqueryToReact"); // browser displays symbol
        //return React.createElement("span", null, "\xa9 2021 - AspNetCoreMVCJqueryToReact"); // browser displays symbol

        // JavaScript converts to copyright symbol
        //return React.createElement("span", null, String.fromCharCode(169) + " 2021 - AspNetCoreMVCJqueryToReact"); // browser displays symbol

        // Browser converts to copyright symbol
        //  --but not recommended: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        //return React.createElement("span", { dangerouslySetInnerHTML: { __html: "&copy; 2021 - AspNetCoreMVCJqueryToReact"} }); // browser displays symbol
        //  - note that this is the ONLY EXAMPLE IN THIS FILE where the browser actually receives the html entity (&copy;) and converts it to the symbol

        //return React.createElement("span", { dangerouslySetInnerHTML: { __html: "\xa9 2021 - AspNetCoreMVCJqueryToReact" } }); // browser displays symbol
    }
}