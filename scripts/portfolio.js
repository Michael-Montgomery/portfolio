var app = angular.module('launch.portfolio', ['ngRoute','launch.portfolioService']);

app.config(function($routeProvider) {
    $routeProvider.when('/portfolio', {
        templateUrl: 'templates/portfolio.tpl.html',
        controller: 'portfolioController'
    })
});

app.directive('backGround', function() {
    return {
        restrict: 'A',
        scope: {},
        link: function(s, e, a) {
            var url = 'http://i.imgur.com/zrV2glv.jpg';
            $(e).css('background-image', 'url(' + url + ')');
        }
    }
})
app.controller('portfolioController', function($scope, portfolioList) {
    $scope.port = portfolioList.projects;
});