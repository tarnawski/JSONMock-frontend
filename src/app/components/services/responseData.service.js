(function () {
  'use strict';
  angular
    .module('JSONMock')
    .factory('responseDataService', responseDataService);


  /** @ngInject */
  function responseDataService($resource, CONSTANTS) {

    return $resource(CONSTANTS.BASE_URL_API + '/response/:app_key/:id', {app_key: '@_app_key', id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });

  }
})();
