var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ui.router'
]).config(function($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/data-sets/0');
    $urlRouterProvider.when('/data-sets', '/data-sets/0');
    
    $stateProvider      
        .state('data-sets', {
            url: '/data-sets',
            templateUrl: '/templates/data_sets.html',
            controller: 'DataSetController'
        })         
        .state('data-sets.single', {
            url: '/:dataSetId',
            templateUrl: '/templates/data_set.html',
            controller: 'DataSetController'
        })          
        .state('data-sets.single.discuss', {
            url: '/discuss',
            templateUrl: '/templates/discuss.html',
            controller: 'DiscussController'
        })         
        .state('data-sets.single.discuss.point', {
            url: '/:dataPoint',
            templateUrl: '/partials/observation.html',
            controller: 'DiscussPointController'
        })          
        .state('data-sets.single.share', {
            url: '/share',
            templateUrl: '/partials/share.html',
            controller: 'ShareController'
        })                     
        .state('navigator', {
            url: '/navigator',
            templateUrl: '/templates/navigator.html',
            controller: 'NavigatorController'
        })          
        .state('navigator.upload', {
            url: '/upload',
            templateUrl: '/partials/upload.html',
            controller: 'UploadController'
        })                
        ;

});