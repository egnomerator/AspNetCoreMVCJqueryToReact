registeredInitializations.footer.push(renderFooter);

function renderFooter() {
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
        document.querySelector("#footer-container div.container span.container")
    )
}

class FooterMsgPart extends React.Component {
    render() {
        return '2021 - AspNetCoreMVCJqueryToReact'
    }
}