(function() {
  'use strict';

  angular
    .module('JSONMock', [
      // Plugins
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',

      // App modules
      'JSONMock.home',
      'JSONMock.dashboard'
    ]);

})();
