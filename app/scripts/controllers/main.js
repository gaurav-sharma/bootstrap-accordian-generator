'use strict';

/**
 * @ngdoc function
 * @name bootstrapAccordianGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapAccordianGeneratorApp
 */
angular.module('bootstrapAccordianGeneratorApp')
  .controller('MainCtrl', function ($scope, myService) {
    
    
    $scope.newHeader = '';
    $scope.newContent = '';
    
    $scope.items = [{
    	header: 'Header 1',
    	content: 'Content 1'
    }, {
    	header: 'Header 2',
    	content: 'Content 2'
    }];
    
    $scope.addItems = function() {
    	
    	$scope.items.push({
    		header: $scope.newHeader,
    		content: $scope.newContent
    	});
    	
    	$scope.newHeader = '';
        $scope.newContent = '';
        
        $scope.rawHtml = myService.rawHtml($scope.items);
    };
    
    $scope.removeItem = function(index) {
    	
    	$scope.items.splice(index, 1);
    	$scope.rawHtml = myService.rawHtml($scope.items);
    };
    
    $scope.rawHtml = myService.rawHtml($scope.items);
    
  });
