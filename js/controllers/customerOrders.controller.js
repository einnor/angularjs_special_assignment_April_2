(function() {

    'use strict';

    angular
        .module('customersApp',['underscore'])
        .controller('customerOrdersController', function($scope, $http, $stateParams) {
          var customerId = $stateParams.id;
          
        });
})();
