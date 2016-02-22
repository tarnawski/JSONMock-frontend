(function () {
  'use strict';

  angular
    .module('JSONMock')
    .directive('createResponse', createResponse);

  /** @ngInject */
  function createResponse() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/pages/dashboard/components/createResponse/createResponse.html',
      controller: createResponseController,
      controllerAs: 'createResponse',
      bindToController: true,
      scope: {
        currentResponse: '='
      }
    };

    return directive;
  }

  /** @ngInject */
  function createResponseController($state, $scope, responseDataService, store, $http, CONSTANTS) {
    var vm = this;
    vm.createResponse = createResponse;
    ////////////

    activate();

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

    function createResponse(response) {
      var copyResponse = Object.assign({}, response);
      copyResponse.value = JSON.parse(response.jsonValue);
      delete copyResponse.jsonValue;

      responseDataService.save({app_key: store.get('APP_KEY')}, copyResponse,
        function (data) {
          $state.go('dashboard', {message: "Success create response: " + data.name});
        },
        function (error) {
          $state.go('dashboard', {message: "Server error when create: " + error.data.message});
        });
    }
  }
})();
