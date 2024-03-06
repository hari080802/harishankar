angular.module('eventCalendarApp', [])

.controller('CalendarController', function() {
    var vm = this;

    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    vm.currentDate = new Date();
    vm.days = [];

    vm.getMonthYear = function() {
        return monthNames[vm.currentDate.getMonth()] + ' ' + vm.currentDate.getFullYear();
    };

    vm.updateCalendar = function() {
        vm.days = [];
        var firstDayOfMonth = new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth(), 1);
        var lastDayOfMonth = new Date(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1, 0);

        var offset = firstDayOfMonth.getDay();

        for (var i = 0; i < offset; i++) {
            vm.days.push('');
        }

        for (var i = 1; i <= lastDayOfMonth.getDate(); i++) {
            vm.days.push(i);
        }
    };

    vm.getEventsForDay = function(dayIndex) {
        // Implement your logic to get events for a specific day
        // This can be from a server, local storage, etc.
        // For demonstration purposes, I'll return some dummy events
        return [
            { name: "Event 1" },
            { name: "Event 2" },
            // Add more events here
        ];
    };

    vm.nextMonth = function() {
        vm.currentDate.setMonth(vm.currentDate.getMonth() + 1);
        vm.updateCalendar();
    };

    vm.prevMonth = function() {
        vm.currentDate.setMonth(vm.currentDate.getMonth() - 1);
        vm.updateCalendar();
    };

    vm.updateCalendar();
});
