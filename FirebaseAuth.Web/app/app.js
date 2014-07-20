(function (window, angular) {
    "use strict";

    angular.module('firebaseAuth', ['ngRoute', 'firebase'])

        .constant('FBURL', 'https://webapi.firebaseio.com/')

        .factory('authInterceptor', function ($rootScope, $q, $window) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};
                    if ($window.sessionStorage.firebaseAuthToken) {
                        config.headers.Authorization = $window.sessionStorage.firebaseAuthToken;
                    }
                    return config;
                },
                response: function (response) {
                    if (response.status === 401) {
                        // TODO: User is not authed
                    }
                    return response || $q.when(response);
                }
            };
        })

        .config(function ($routeProvider, $httpProvider) {

            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    templateUrl: 'app/views/main.html'
                })
                .otherwise('/');
            
            $httpProvider.interceptors.push('authInterceptor');

            $httpProvider.responseInterceptors.push(function ($q) {
                return function (promise) {
                    var deferred = $q.defer();
                    promise.then(
                        function (response) {

                            //deferred.reject("i suddenly decided i didn't like that response");
                            
                            deferred.resolve(response);
                        },
                        function (error) {
                            deferred.reject(error);
                        }
                    );
                    return deferred.promise;
                };
            });

        });

})(window, angular);