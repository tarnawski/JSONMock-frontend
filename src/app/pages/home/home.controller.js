(function() {
  'use strict';

  angular
    .module('JSONMock.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state, applicationDataService, store, $stateParams) {

    var vm = this;
    vm.login = login;
    vm.create = create;

    activate();

    function activate(){
      vm.info = $stateParams.message;
    }

    function login(){
      applicationDataService.get({id: vm.appKey},
        function (data) {
          store.set('APP_KEY', data.app_key);
          $state.go('dashboard');
      },
        function(error){
          vm.message = error.data.message;
        });
    }

    function create(name){
      var application = {
        name: name
      };
      applicationDataService.save(application, function(data){
        vm.appKey = data.app_key;
        vm.createComplete = true;
      });
    }
  }
})();
