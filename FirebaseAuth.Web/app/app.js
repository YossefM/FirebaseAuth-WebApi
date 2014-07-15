(function (window, angular) {
    "use strict";

    angular.module('firebaseAuth', ['ngRoute', 'firebase'])

        .constant('FBURL', 'https://webapi.firebaseio.com/')

        .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    templateUrl: 'app/views/main.html'
                })
                .otherwise('/');

        });

})(window, angular);