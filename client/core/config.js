/**
 * Created by Taimoor tariq on 1/19/2016.
 */


(function () {
    angular.module("myApp")
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider


                .state("login", {
                    url: '/login',
                    views: {
                        'content@': {
                            templateUrl: "components/login/login.html",
                            controller: "LoginController",
                            controllerAs: "login"
                        }
                    }
                })
                .state("signup", {
                    url: '/signup',
                    views: {
                        'content@': {
                            templateUrl: 'components/signup/signup.html',
                            controller: 'SignupController',
                            controllerAs: 'signup'
                        }
                    }
                })
                .state('dashboard', {
                    url: '/dashboard',
                    views: {
                        'header@': {
                            templateUrl: 'components/header/header.html',
                            controller: 'HeaderController'
                        },
                        'content@': {
                            templateUrl: "components/dashboard/dashboard.html",
                            controller: "DashboardController",
                            controllerAs: "dashboard"
                        }
                    }
                })
                .state('user', {
                    url: '/user',
                    views: {
                        'header@': {
                            templateUrl: 'components/header/header.html',
                            controller: 'HeaderController'
                        },
                        'content@': {
                            templateUrl: 'components/userinformation/userinformation.html',
                            controller: 'UserInfoController',
                            controllerAs: 'userinfo'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/login')

        })

})();