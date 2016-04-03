(function() {

    'use strict';

    angular
        .module('customersApp')
        .controller('customerOrdersController', function($scope, $http, $stateParams, _) {
          var customerId = $stateParams.id.toString();
          $scope.order = {};
          $scope.orders = {};
          $scope.numberOfOrders = 0;
          $scope.rowLimit = 15;
          $scope.sortColumn = "item";
          $scope.reverseSort = false;
          $scope.sortData = function(column){
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false
            $scope.sortColumn = column;
          }
          $scope.getSortClass = function(column){
            if($scope.sortColumn == column){
              return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
          }
          $http
            .get('customers/customers.json')
            .success(function(data) {
                $scope.customer = _.where(data.customers, {id:customerId} );
                $scope.numberOfOrders = $scope.customer[0].orders.length;
                console.log($scope.numberOfOrders);
                $scope.names = $scope.customer[0].names;
                $scope.orders = $scope.customer[0].orders;
                $scope.createCustomerOrder = function(){
                  //var order = $scope.order;
                  $scope.order.thedate = Date.now();
                  console.log($scope.order);
                  $scope.orders.push($scope.order);
                  $scope.order = "";
                  $scope.numberOfOrders++;
                }
            });
          });
})();
