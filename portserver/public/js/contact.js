var app = angular.module('launch.contact', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: '/views/templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope) {
    $scope.message = 'contact';
})