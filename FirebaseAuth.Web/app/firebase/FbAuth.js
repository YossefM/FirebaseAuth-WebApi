(function (angular) {
    "use strict";

    // Auth factory that encapsulates $firebaseSimpleLogin methods
    // provides easy use of capturing events that were emitted
    // on the $rootScope when users login and out
    var app = angular.module('firebaseAuth');
    app.factory('FbAuth', function ($firebaseSimpleLogin, Fb, $rootScope) {
        var simpleLogin = $firebaseSimpleLogin(Fb);
        return {
            getCurrentUser: function() {
                return simpleLogin.$getCurrentUser();
            },
            login: function (provider, user) {
                if (provider !== 'password') {
                    simpleLogin.$login(provider);
                } else {
                    simpleLogin.$login('password', {
                        email: user.email,
                        password: user.password
                    });
                }
            },
            logout: function() {
                simpleLogin.$logout();
            },
            onLogin: function(cb) {
                $rootScope.$on('$firebaseSimpleLogin:login',
                  function(e, user) {
                      cb(e, user);
                  });
            },
            onLogout: function(cb) {
                $rootScope.$on('$firebaseSimpleLogin:logout',
                  function(e, user) {
                      cb(e, user);
                  });
            }
        }
    });

})(angular);