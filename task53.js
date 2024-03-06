angular.module('authApp', [])

.controller('AuthController', function() {
    var vm = this;

    vm.isAuthenticated = false;
    vm.showSignupForm = false;
    vm.user = {};
    vm.loginData = {
        email: '',
        password: ''
    };
    vm.signupData = {
        email: '',
        password: ''
    };

    vm.login = function() {
        // Implement login logic here (e.g., send login request to server)
        // For demonstration purposes, let's assume successful login
        vm.isAuthenticated = true;
        vm.user.email = vm.loginData.email;
        vm.resetLoginData();
    };

    vm.signup = function() {
        // Implement signup logic here (e.g., send signup request to server)
        // For demonstration purposes, let's assume successful signup
        vm.isAuthenticated = true;
        vm.user.email = vm.signupData.email;
        vm.resetSignupData();
    };

    vm.logout = function() {
        vm.isAuthenticated = false;
        vm.resetLoginData();
        vm.resetSignupData();
    };

    vm.showSignup = function() {
        vm.showSignupForm = true;
    };

    vm.showLogin = function() {
        vm.showSignupForm = false;
    };

    vm.resetLoginData = function() {
        vm.loginData = {
            email: '',
            password: ''
        };
    };

    vm.resetSignupData = function() {
        vm.signupData = {
            email: '',
            password: ''
        };
    };
});
