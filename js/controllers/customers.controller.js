(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('customersController', function($scope, $http) {
          $http
            .get('customers/customers.json')
            .success(function(data) {
              console.log(data)
                $scope.customers = data.customers;
            });
        });
})();
