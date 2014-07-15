(function (angular) {
    "use strict";

    var app = angular.module('firebaseAuth');
    app.factory('LocalAuth', function ($http, $q) {
        return {
            auth: function auth(fbUser) {
                $http.post('api/auth', fbUser)
                    .success(function (e) {
                        console.log(e);
                    });
            }
        };
    });

})(angular);