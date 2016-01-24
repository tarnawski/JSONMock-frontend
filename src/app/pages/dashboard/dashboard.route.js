(function ()
{
    'use strict';

    angular
        .module('JSONMock.dashboard')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'app/pages/dashboard/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'dashboard'
  });
}

})();
