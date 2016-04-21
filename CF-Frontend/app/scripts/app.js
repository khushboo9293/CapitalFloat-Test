'use strict';

/**
 * @ngdoc overview
 * @name cfTestApp
 * @description
 * # cfTestApp
 *
 * Main module of the application.
 */
var APIBaseUrl = 'http://coreapi-dev-test.ap-southeast-1.elasticbeanstalk.com/v0/';

angular
  .module('cfTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
