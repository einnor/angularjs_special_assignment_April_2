(function() {
    'use strict';

    angular
        .module('customersApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            // Chaka to provide this
            $authProvider.loginUrl = 'api/authenticate';

            // Redirect to the login state if any other states
            // are requested other than customers
            $urlRouterProvider.otherwise('/customers');

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'loginController as auth'
                })
                .state('customers', {
                    url: '/customers',
                    templateUrl: 'templates/manageCustomers.html',
                    controller: 'customersController'
                });
        });
})();
