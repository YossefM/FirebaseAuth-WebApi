(function (angular) {
    "use strict";

    var app = angular.module('firebaseAuth');
    app.factory('Users', function ($http, $q, APIURL) {
        return {
            save: function saveUser(fbUser) {
                var deferred = $q.defer;

                $http.post(APIURL + 'users', fbUser)
                    .success(function (user) {
                        deferred.resolve(user);
                    });

                return deferred.promise;
            }
        };
    });

})(angular);