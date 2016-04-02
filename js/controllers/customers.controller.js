(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('customersController', function($scope, $http) {
          $scope.customer = {};
          $scope.customers = {};
          $http
            .get('customers/customers.json')
            .success(function(data) {
              $scope.customers = data.customers;
            });
          $scope.createCustomer = function(){
            var customer = $scope.customer;
            console.log(customer);
            $scope.customers.push(customer);
            $scope.customer = "";
          }
        });
})();
