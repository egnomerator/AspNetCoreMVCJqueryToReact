declare namespace ClientApp.PubSub {
    let eventRegister: EventRegister;
    function subscribe(eventName: string, handler: (data: object) => any): void;
    function publish(eventName: string, data: object): void;
}

interface EventRegister {
    clearColumnFilters: string;
    columnFiltersChanged: string;
}
