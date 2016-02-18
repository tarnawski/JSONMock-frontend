(function() {
  'use strict';

  angular
    .module('JSONMock')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, store) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      var requireAuth = toState.data.requireAuth;

      if (requireAuth && store.get('APP_KEY')== null) {
        event.preventDefault();
        $state.go('home', { message: 'To view this page you must be logged in.'});
      }
    });
  }
})();
