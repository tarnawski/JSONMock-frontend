(function ()
{
    'use strict';
    angular
        .module('JSONMock')
        .factory('applicationDataService', applicationDataService);

    /** @ngInject */
    function applicationDataService($resource, CONSTANTS) {

      return $resource(CONSTANTS.BASE_URL_API + '/application/:id');

    }
    })();
