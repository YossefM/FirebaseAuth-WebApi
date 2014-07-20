(function (angular) {
    "use strict";

    var app = angular.module('firebaseAuth');
    app.factory('Cities', function ($http, $q, APIURL) {
        return {
            get: function getCities() {
                var deferred = $q.defer();

                $http.get(APIURL + 'cities')
                    .success(function (data) {
                        deferred.resolve(data);
                    });

                return deferred.promise;
            }
        };
    });

})(angular);