(function ()
{
    'use strict';

    angular
        .module('JSONMock.home')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/pages/home/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  });
}

})();
