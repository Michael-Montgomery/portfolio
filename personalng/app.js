var app = angular.module('launch', ['ngRoute', 'launch.home', 'launch.about', 'launch.portfolio', 'launch.contact', 'launch.blog']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/home',
        controller: 'homeController'
    }).otherwise({
        redirectTo: '/home',
        controller: 'homeController'
    })
});

app.directive('showMenu', function() {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, elem, attr) {
            elem.on('click', function() {
                $('.mini-wrapper').toggle('slow');

            })
        }
    }
})

app.controller('navController', function($scope) {

})


