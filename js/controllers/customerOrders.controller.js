(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('customerOrdersController', function($scope, $http, $stateParams, _) {
          var customerId = $stateParams.id.toString();
          $scope.order = {};
          $scope.orders = {};
          $http
            .get('customers/customers.json')
            .success(function(data) {
                $scope.customer = _.where(data.customers, {id:customerId} );
                $scope.names = $scope.customer[0].names;
                $scope.orders = $scope.customer[0].orders;
                $scope.createCustomerOrder = function(){
                  var order = $scope.order;
                  $scope.order.thedate = Date.now();
                  console.log(order);
                  $scope.orders.push(order);
                  $scope.order = "";
                }
            });
          });
})();
