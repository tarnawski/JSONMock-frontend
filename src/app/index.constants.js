/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('JSONMock')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS',{
      BASE_URL_API: 'https://api-jsonmock.herokuapp.com/api',
      BASE_URL_APP: 'https://api-jsonmock.herokuapp.com/app'
    });

})();
