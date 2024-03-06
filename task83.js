angular.module('todoApp', [])

.controller('TodoController', function() {
    var vm = this;

    vm.tasks = [
        { name: 'Task 1', completed: false },
        { name: 'Task 2', completed: true },
        { name: 'Task 3', completed: false }
        // Add more tasks here
    ];

    vm.newTask = '';

    vm.addTask = function() {
        if (vm.newTask.trim() !== '') {
            vm.tasks.push({ name: vm.newTask, completed: false });
            vm.newTask = '';
        }
    };

    vm.toggleCompleted = function(task) {
        task.completed = !task.completed;
    };

    vm.removeTask = function(task) {
        var index = vm.tasks.indexOf(task);
        if (index !== -1) {
            vm.tasks.splice(index, 1);
        }
    };
});
