var pubSub = (function () {
    var eventRegister = {
        newColumnFilterName: "NEW_COLUMN_FILTER_NAME",
        newColumnFilterRole: "NEW_COLUMN_FILTER_ROLE",
        newColumnFilterJob: "NEW_COLUMN_FILTER_JOB",
        clearColumnFilters: "CLEAR_COLUMN_FILTERS"
    };

    var messageBroker = {
        findEvent: function (eventName) {
            return this.events.filter(e => { return e.eventName === eventName })[0];
        },
        events: [
            {
                eventName: eventRegister.newColumnFilterName,
                eventHandlers: []
            },
            {
                eventName: eventRegister.newColumnFilterRole,
                eventHandlers: []
            },
            {
                eventName: eventRegister.newColumnFilterJob,
                eventHandlers: []
            },
            {
                eventName: eventRegister.clearColumnFilters,
                eventHandlers: []
            }
        ],
        subscribe: function (eventName, handler) {
            var event = this.findEvent(eventName);
            event.eventHandlers.push(handler);
        },
        publish: function (eventName, data) {
            var event = this.findEvent(eventName);
            event.eventHandlers.map((handler, i) => { handler(data); });
        }
    };

    return {
        eventRegister: eventRegister,
        subscribe: function (eventName, subscriber) { messageBroker.subscribe(eventName, subscriber); },
        publish: function (eventName, data) { messageBroker.publish(eventName, data); }
    }
})();