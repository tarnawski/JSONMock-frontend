(function() {
  'use strict';

  angular
    .module('JSONMock.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($location, applicationDataService, store) {

    var vm = this;
    vm.login = login;
    vm.create = create;

    function login(){
      applicationDataService.getApplication(vm.appKey).then(
        function( data ) {
          console.log(data);
          if(data.status == 'Error'){
            vm.notMath = true;
          }else{
            store.set('APP_KEY', data.app_key);
            console.log(store.get('APP_KEY'));
            $location.path('/dashboard')
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
