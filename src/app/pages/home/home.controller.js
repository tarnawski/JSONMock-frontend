(function() {
  'use strict';

  angular
    .module('JSONMock.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(applicationDataService, $http) {

    var vm = this;
    vm.login = login;
    vm.create = create;

    function login(){
      applicationDataService.getApplication(vm.appKey).then(
        function( data ) {
          console.log(data);
          if(data.status == 'Error'){
            vm.notMath = true;
          }
        });
    }

    function create(name){
      applicationDataService.createApplication(name).then(
        function( data ) {
          console.log(data);
          vm.appKey = data.app_key;
          vm.createComplete = true;
       });
    }
  }
})();
