(function () {
  'use strict';

  angular
    .module('JSONMock.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($state, applicationDataService, responseDataService, store, CONSTANTS, $http) {

    var vm = this;
    vm.logout = logout;



    vm.updateResponse = updateResponse;
    vm.createResponse = createResponse;
    vm.preCreate = preCreate;
    vm.createForm = true;
    vm.home = true;


    activate();

    function activate() {
      vm.message = null;

        applicationDataService.get({id: store.get('APP_KEY')},
        function(data){
          vm.application = data;
        },
        function(){
          store.remove('APP_KEY');
          $state.go('home', { message: 'Fetch application failed.'});
        });


    }

    function createResponse(){
      vm.message = null;
      vm.newResponse.value = JSON.parse(vm.newResponse.jsonValue);
      responseDataService.createResponse(store.get('APP_KEY'), vm.newResponse).then(
        function (data) {
          if (data.status == 'Error') {
            vm.message = data.status+ ': ' + data.message;
          } else {
            vm.newResponse = data;
            vm.newResponse.jsonValue = JSON.stringify(data.value, undefined, 4);
            applicationDataService.getApplication(store.get('APP_KEY')).then(
              function (data) {
                vm.application = data;
              });
            vm.showDetails(data.id)
          }
        });
    }

    function updateResponse(id) {
      vm.message = null;
      vm.response.value = JSON.parse(vm.response.jsonValue);
      responseDataService.updateResponse(store.get('APP_KEY'), id, vm.response).then(
        function (data) {
          if (data.status == 'Error') {
            vm.message = data.status + ': ' + data.message;
          } else {
            vm.response = data;
            vm.response.jsonValue = JSON.stringify(data.value, undefined, 4);
            vm.message = 'Update response: ' + data.name ;
            applicationDataService.getApplication(store.get('APP_KEY')).then(
              function (data) {
                vm.application = data;
              })
          }
        });
    }

    function preCreate(){
      vm.newResponse = null;
      vm.createForm = true
    }

    function logout() {
     console.log("test");
      store.remove('APP_KEY');
      $state.go('home', { message: 'Logout successful.'});
    }
  }
})();
