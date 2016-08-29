var app = angular.module('launch.home', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        redirectTo: '/home',
        templateUrl: '/views/templates/home.tpl.html',
        controller: 'homeController'
    })
});
app.controller('homeController', function($scope) {
    $scope.message = 'home';
});