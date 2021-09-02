var eventRegister = {
    clearColumnFilters: "CLEAR_COLUMN_FILTERS",
    columnFiltersChanged: "COLUMN_FILTERS_CHANGED"
};

var messageBroker = {
    findEvent: function (eventName) {
        return this.events.filter(e => { return e.eventName === eventName })[0];
    },
    events: [
        {
            eventName: eventRegister.clearColumnFilters,
            eventHandlers: []
        },
        {
            eventName: eventRegister.columnFiltersChanged,
            eventHandlers: []
        }
    ],
    subscribe: function (eventName, handler) {
        var event = this.findEvent(eventName);
        event.eventHandlers.push(handler);
        var unsubscriber = function () {
            event.eventHandlers = event.eventHandlers.filter((h) => {
                return h !== handler;
            });
        }
        return unsubscriber;
    },
    publish: function (eventName, data) {
        var event = this.findEvent(eventName);
        event.eventHandlers.map((handler, i) => { handler(data); });
    }
};

var pubSub = {
    eventRegister: eventRegister,
    subscribe: function (eventName, subscriber) { return messageBroker.subscribe(eventName, subscriber); },
    publish: function (eventName, data) { messageBroker.publish(eventName, data); }
};

export default pubSub;
