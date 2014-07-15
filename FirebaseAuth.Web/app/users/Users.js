(function (angular) {
    "use strict";

    var app = angular.module('firebaseAuth');
    app.factory('Users', function ($http, $q) {
        return {
            save: function saveUser(fbUser) {
                $http.post('api/users', fbUser)
                    .success(function (e) {
                        console.log(e);
                    });
            }
        };
    });

})(angular);