(function () {
  'use strict';

  angular
    .module('JSONMock.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($state, applicationDataService, store, $stateParams, $timeout) {

    var vm = this;
    vm.logout = logout;
    vm.startTime = startTime;

    activate();

    function activate() {
      if($stateParams.message) {
        vm.info = $stateParams.message;
        startTime(3000);
      }
      vm.show = false;
      vm.create = true;
      applicationDataService.get({id: store.get('APP_KEY')},
        function (data) {
          vm.application = data;
        },
        function () {
          store.remove('APP_KEY');
          $state.go('home', {message: 'Fetch application failed.'});
        });
    }

    function logout() {
      store.remove('APP_KEY');
      $state.go('home', {message: 'Logout successful.'});
    }

    function startTime(time){
      vm.count = true;
      $timeout(function () { vm.count = false; }, time);

    }
  }
})();
