(function() {
  'use strict';

  angular
    .module('JSONMock')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    // Default behaviour
    $urlRouterProvider.otherwise('/');
  }

})();
