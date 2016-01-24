/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('JSONMock')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS',{
      BASE_URL_API: 'http://jsonmock.dev/app_dev.php/api',
      BASE_URL_APP: 'http://jsonmock.dev/app_dev.php/app'
    });

})();
