(function (angular) {

    angular.module('firebaseAuth')
        .controller('MainCtrl', function ($scope, FbAuth, LocalAuth) {

            FbAuth.onLogin(function (e, user) {
                console.log(JSON.stringify(user));
                LocalAuth.auth(user);
            });

            FbAuth.onLogout(function (e, user) {
                console.log(e, user);
            });

        });

})(angular);