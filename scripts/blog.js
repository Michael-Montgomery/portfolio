var app = angular.module('launch.blog', ['ngRoute', 'launch.blogService']);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope, blogDB) {
    $scope.blogPosts = blogDB.blogList;

})