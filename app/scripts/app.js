'use strict';

/**
 * @ngdoc overview
 * @name chatMeApp
 * @description
 * # chatMeApp
 *
 * Main module of the application.
 */
angular
  .module('chatMeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pubnub.angular.service'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl',
      })
      .otherwise({
        redirectTo: '/join'
      });
  });
