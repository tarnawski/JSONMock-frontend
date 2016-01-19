(function ()
{
    'use strict';
    angular
        .module('JSONMock')
        .service('responseDataService', responseDataService);

  responseDataService.$inject = ['$http', 'CONSTANTS'];

    /** @ngInject */
    function responseDataService($http, CONSTANTS) {
        var service = {
            getResponse: getResponse
        };

        return service;

        /////////////

        function getResponse(appKey, id) {
          var request = $http({
            method: "get",
            url: CONSTANTS.BASE_URL +'/response/' + appKey + '/' + id,
            params: {
              action: "get"
            }
          });
          return( request.then( handleSuccess, handleError ) );
        }

      function handleSuccess( response ) {
        return( response.data );
      }

      function handleError( response ) {
        if (
          ! angular.isObject( response.data ) ||
          ! response.data.message
        ) {
          return( $q.reject( "An unknown error occurred." ) );
        }
        return( $q.reject( response.data.message ) );
      }
    }
    })();
