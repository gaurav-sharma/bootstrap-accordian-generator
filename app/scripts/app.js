'use strict';

/**
 * @ngdoc overview
 * @name bootstrapAccordianGeneratorApp
 * @description
 * # bootstrapAccordianGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapAccordianGeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
