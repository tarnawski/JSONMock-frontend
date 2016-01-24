(function ()
{
    'use strict';
    angular
        .module('JSONMock')
        .service('applicationDataService', applicationDataService);

  applicationDataService.$inject = ['$q', '$http', 'CONSTANTS'];

    /** @ngInject */
    function applicationDataService($q, $http, CONSTANTS) {
        var service = {
            getApplication: getApplication,
            createApplication: createApplication
        };

        return service;

        /////////////

        function getApplication(appKey) {
          var request = $http({
            method: "get",
            url: CONSTANTS.BASE_URL_API +'/application/' + appKey,
            params: {
              action: "get"
            }
          });
          return( request.then( handleSuccess, handleError ) );
        }

      function createApplication(name){
        if (typeof(name)==='undefined') name = 'undefined';
        var request = $http({
          method: 'POST',
          url: CONSTANTS.BASE_URL_API +'/application/',
          data: { name: name }

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
