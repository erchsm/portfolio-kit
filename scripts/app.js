(function () {
  'use strict';

  /* Declare app level module which depe&nds on filters, and services */


  angular.module('myApp', [
    'ui.router',
    'myApp.directives',
    'myApp.controllers'
    ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller  : 'mainController'
    })
    .state('card-components', {
      url: '/card-components',
      templateUrl: 'partials/card-components.html',
      controller  : 'mainController'
    })
    .state('micro-app-templates', {
      url: '/micro-app-templates',
      templateUrl: 'partials/micro-app-templates.html',
      controller  : 'mainController'
    })
  }])


})();
