import * as React from "react";

export default class FooterMsgPart extends React.Component {

    getValue() {
        return <div>&copy; 2021 - AspNetCoreMVCJqueryToReact</div>;
    }

    render() {
        return this.getValue();
        //return <div>&copy; 2021 - AspNetCoreMVCJqueryToReact</div>;
        //return <div>&#169; 2021 - AspNetCoreMVCJqueryToReact</div>;
        //return <span>{String.fromCharCode(169) + " 2021 - AspNetCoreMVCJqueryToReact"}</span>;
    }
}