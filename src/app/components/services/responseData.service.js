(function ()
{
    'use strict';
    angular
        .module('JSONMock')
        .service('responseDataService', responseDataService);

  responseDataService.$inject = ['$q', '$http', 'CONSTANTS'];

    /** @ngInject */
    function responseDataService($q, $http, CONSTANTS) {
        var service = {
            getResponse: getResponse,
            updateResponse: updateResponse,
            createResponse: createResponse
        };

        return service;

        /////////////

        function getResponse(appKey, id) {
          var request = $http({
            method: "get",
            url: CONSTANTS.BASE_URL_API +'/response/' + appKey + '/' + id,
            params: {
              action: "get"
            }
          });
          return( request.then( handleSuccess, handleError ) );
        }

      function createResponse(appKey, response){
        var request = $http({
          method: 'POST',
          url: CONSTANTS.BASE_URL_API +'/response/'+ appKey,
          data: {
            "name": response.name,
            "url": response.url,
            "value": response.value,
            "method": response.method,
            "statusCode": response.status_code
          }

        });

        return( request.then( handleSuccess, handleError ) );
      }

      function updateResponse(appKey, id, response){
        var request = $http({
          method: 'PUT',
          url: CONSTANTS.BASE_URL_API +'/response/'+ appKey + '/' + id,
          data: {
            "name": response.name,
            "url": response.url,
            "value": response.value,
            "method": response.method,
            "statusCode": response.status_code
          }
        });

        return( request.then( handleSuccess, handleError ) );
      }

      function handleSuccess( response ) {
        return( response.data );
      }

      function handleError( response ) {
        return( response.data );
      }
    }
    })();
