(function (angular) {

    angular.module('firebaseAuth')
        .controller('MainCtrl', function ($scope, FbAuth, Users, Cities) {

            FbAuth.onLogin(function (e, user) {
                Users.save(user);
            });

            FbAuth.onLogout(function (e, user) {
                //console.log(e, user);
            });

            Cities.get()
                .then(function (cities) {
                    console.log(cities);
                });

        });

})(angular);