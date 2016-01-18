(function() {
  'use strict';

  angular
    .module('jsonmockFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
