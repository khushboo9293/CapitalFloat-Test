'use strict';

/**
 * @ngdoc function
 * @name cfTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cfTestApp
 */
angular.module('cfTestApp')
  .controller('MainCtrl', function ($scope, $http, mainService) {
  	$scope.model = {};
    $scope.get_combinations = function(){
    	mainService.get_combinations($scope.model.str)
    	.success(function(response){
    		console.log(response);
    		$scope.model=response;
    	})
    }
  });
