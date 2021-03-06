(function () {
  'use strict';

  angular
    .module('JSONMock')
    .directive('currentResponse', currentResponse);

  /** @ngInject */
  function currentResponse() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/pages/dashboard/components/currentResponse/currentResponse.html',
      controller: currentResponseController,
      controllerAs: 'currentResponse',
      bindToController: true,
      scope: {
        currentResponse: '='
      }
    };

    return directive;
  }

  /** @ngInject */
  function currentResponseController($state, $scope, responseDataService, store, $http, CONSTANTS) {
    var vm = this;
    vm.deleteResponse = deleteResponse;
    vm.updateResponse = updateResponse;

    ////////////

    activate();

    $scope.$watch('currentResponse', function (newValue, oldValue) {
      if (!angular.equals(newValue.currentResponse, oldValue.currentResponse) && newValue.currentResponse) {
        responseDataService.get({app_key: store.get('APP_KEY'), id: newValue.currentResponse},
          function (data) {
            vm.response = data;
            vm.response.jsonValue = JSON.stringify(data.value, undefined, 4);
          });
      }
    }, true);

    function activate() {
      vm.baseUrlApp = CONSTANTS.BASE_URL_APP;
      vm.APP_KEY = store.get('APP_KEY');

      $http.get('typeOfRequest.json')
        .then(function (res) {
          vm.typeOfRequest = res.data;
        });
      $http.get('methodOfRequest.json')
        .then(function (res) {
          vm.methodOfRequest = res.data;
        });
    }

    function updateResponse(response) {

      var preparedResponse = {
        name: response.name,
        url: response.url,
        value: JSON.parse(response.jsonValue),
        method: response.method,
        statusCode: response.status_code
      };

      responseDataService.update({app_key: store.get('APP_KEY'), id: response.id}, preparedResponse,
        function (data) {
          $state.go('dashboard', {message: "Success update response"});
        },
        function (error) {
          $state.go('dashboard', {message: "Server error when update: " + error.data.message});
        });
    }

    function deleteResponse(response) {
      responseDataService.delete({app_key: store.get('APP_KEY'), id: response},
        function (data) {
          $state.go('dashboard', {message: "Success delete response"});
        },
        function (error) {
          $state.go('dashboard', {message: "Server error when delete: " + error.data.message});
        });
    }
  }
})();
