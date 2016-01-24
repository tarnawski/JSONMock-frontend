(function () {
  'use strict';

  angular
    .module('JSONMock.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($location, applicationDataService, responseDataService, store, CONSTANTS, $http) {

    var vm = this;
    vm.logout = logout;
    vm.showDetails = showDetails;
    vm.updateResponse = updateResponse;
    vm.fixStyle = fixStyle;
    vm.home = true;
    vm.baseUrlApp = CONSTANTS.BASE_URL_APP;

    activate();

    function activate() {
      vm.message = null;
      if (store.get('APP_KEY') == null) {
        $location.path('/');
      } else {
        applicationDataService.getApplication(store.get('APP_KEY')).then(
          function (data) {
            if (data.status == 'Error') {
              store.remove('APP_KEY');
              $location.path('/')
            } else {
              vm.application = data;
            }
          });
        $http.get('typeOfRequest.json')
          .then(function(res){
            vm.typeOfRequest = res.data;
          });
      }
    }

    function showDetails(id) {
      vm.message = null;
      vm.home = false;
      responseDataService.getResponse(store.get('APP_KEY'), id).then(
        function (data) {
          if (data.status == 'Error') {
            vm.message = data.status+ ': ' + data.message;
          } else {
            vm.response = data;
            vm.response.jsonValue = JSON.stringify(data.value, undefined, 4);
          }
        });
    }

    function updateResponse(id) {
      vm.message = null;
      vm.response.value = JSON.parse(vm.response.jsonValue);
      responseDataService.updateResponse(store.get('APP_KEY'), id, vm.response).then(
        function (data) {
          if (data.status == 'Error') {
            vm.message = data.status+ ': ' + data.message;
          } else {
            vm.response = data;
            vm.response.jsonValue = JSON.stringify(data.value, undefined, 4);
            vm.message = 'Updated response: ' + data.name ;
            applicationDataService.getApplication(store.get('APP_KEY')).then(
              function (data) {
                vm.application = data;
              })
          }
        });
    }

    function fixStyle(){
      vm.message = null;
      vm.response.value = JSON.parse(vm.response.jsonValue);
      vm.response.jsonValue = JSON.stringify(vm.response.value, undefined, 4);
    }

    function logout() {
      vm.message = null;
      store.remove('APP_KEY');
      $location.path('/')
    }
  }
})();
