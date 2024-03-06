angular.module('dashboardApp', [])

.controller('DashboardController', function() {
    var vm = this;

    vm.metrics = [
        { label: 'Sales', value: 1000 },
        { label: 'Visitors', value: 5000 },
        { label: 'Subscriptions', value: 200 }
        // Add more metrics here
    ];
});
