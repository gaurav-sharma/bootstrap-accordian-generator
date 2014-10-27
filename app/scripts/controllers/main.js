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
    
	//initialize
    $scope.newHeader = '';
    $scope.newContent = '';
    $scope.showOptions = false;
    
    $scope.items = [{
    	header: 'Header 1',
    	content: 'Content 1'
    }, {
    	header: 'Header 2',
    	content: 'Content 2'
    }];
    
    $scope.options = [{
    	value: '1',
    	description: 'First FAQ expanded on page load',
    	defaultValue: false
    }, {
    	value: '2',
    	description: 'All Expanded',
    	defaultValue: false
    }];
    
    //add faq items
    $scope.addItems = function() {
    	
    	$scope.items.push({
    		header: $scope.newHeader,
    		content: $scope.newContent
    	});
    	
    	$scope.newHeader = '';
        $scope.newContent = '';

    };
    
    //delete faq items
    $scope.removeItem = function(index) {    	
    	$scope.items.splice(index, 1);
    };
    
    //watch for collection addition / deletion 
    $scope.$watchCollection('items', function(newValue, oldValue) {
    	$scope.rawHtml = myService.rawHtml($scope.items, $scope.options);
    });
    
    //watch for property changes in options
    $scope.$watch('options', function(newValue, oldValue) {
    	$scope.rawHtml = myService.rawHtml($scope.items, $scope.options);
    }, true);
    
  });
