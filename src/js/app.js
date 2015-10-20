var app = angular.module("app", [
    "ngAnimate",
    "ui.bootstrap",
    "jkuri.slimscroll",
    "ngRoute"
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});

    $routeProvider
        .when('/settings', {
            templateUrl: 'js/Settings/settingsView.html',
            controller: 'settingsCtrl',
            controllerAs: 'settings'
        })

        .when('/:page', {
            templateUrl: 'js/Streams/streamsView.html',
            controller: 'streamCtrl',
            controllerAs: 'streams'
        })

        .otherwise({
            redirectTo: '/following'
        });
}]);