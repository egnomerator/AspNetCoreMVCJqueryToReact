var pubSub = (function () {
    var eventRegister = {
        newColFilterName: "NEW_COLUMN_FILTER_NAME",
        newColFilterRole: "NEW_COLUMN_FILTER_ROLE",
        newColFilterJob: "NEW_COLUMN_FILTER_JOB",
        clearColFilters: "CLEAR_COLUMN_FILTERS"
    };

    var messageBroker = {
        findEvent: function (eventName) {
            return this.events.filter(e => { return e.eventName === eventName })[0];
        },
        events: [
            {
                eventName: eventRegister.newColFilterName,
                eventHandlers: []
            },
            {
                eventName: eventRegister.newColFilterRole,
                eventHandlers: []
            },
            {
                eventName: eventRegister.newColFilterJob,
                eventHandlers: []
            },
            {
                eventName: eventRegister.clearColFilters,
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