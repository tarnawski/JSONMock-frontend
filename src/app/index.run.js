(function() {
  'use strict';

  angular
    .module('JSONMock')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
