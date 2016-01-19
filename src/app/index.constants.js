/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('JSONMock')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS',{
      BASE_URL: 'http://jsonmock.dev/app_dev.php/api'
    });

})();
