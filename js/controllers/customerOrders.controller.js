(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('customerOrdersController', function($scope, $http, $stateParams, _) {
          var customerId = $stateParams.id.toString();
          $http
            .get('customers/customers.json')
            .success(function(data) {
                console.log(data.customers)
                $scope.customer = _.where(data.customers, {id:customerId} );
                $scope.orders = $scope.customer[0].orders;
                console.log($scope.orders);
            });
          });
})();
