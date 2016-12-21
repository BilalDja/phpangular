(function () {
    'use strict';

    var app = angular.module('app', []);
    app.controller('MainController', MainController);

    MainController.$inject = ['$http'];

    function MainController($http) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.login = function () {
            if (vm.username && vm.password) {
                var data = {
                    username: vm.username,
                    password: vm.password
                };
                var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                }
                $http.post('http://localhost:9000', data, config).then(function success(info) {
                    console.log("Info: ", info.data);
                }, function failure(raison) {
                    console.error(raison);
                });
            } else {
                alert('You should enter a valid username and password');
            }
        };
    }

})();