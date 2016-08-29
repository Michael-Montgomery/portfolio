var app = angular.module('launch.about', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: '/views/templates/about.tpl.html',
        controller: 'aboutController'
    })
});

app.controller('aboutController', function($scope) {
    $scope.message = 'about';
});