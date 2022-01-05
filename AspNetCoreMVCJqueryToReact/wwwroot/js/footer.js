registeredInitializations.footer.push(renderFooter);

function renderFooter() {
    var container = document.querySelector("#footer-container div.container");
    ClientApp.Components.renderFooter(container);
}