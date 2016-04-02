(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('loginController', loginController);

    function loginController($auth, $state) {
        var vm = this;
        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            }
            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {
                // If login is successful, redirect to the customers state
                $state.go('customers', {});
            });
        }
    }
})();
