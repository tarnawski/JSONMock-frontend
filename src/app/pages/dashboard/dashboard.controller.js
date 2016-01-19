(function() {
  'use strict';

  angular
    .module('JSONMock.dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($location, applicationDataService, responseDataService, store) {

    var vm = this;
    vm.logout = logout;
    vm.showDetails = showDetails;
    vm.home = true;
    activate();

    function activate(){
      if(store.get('APP_KEY') == null){
        $location.path('/');
      }else{
        applicationDataService.getApplication(store.get('APP_KEY')).then(
          function( data ) {
            if(data.status == 'Error'){
              store.remove('APP_KEY');
              $location.path('/')
            }else{
              vm.application = data;
            }
          });
      }
    }

    function showDetails(id){
      vm.home = false;
      responseDataService.getResponse(store.get('APP_KEY'), id).then(
        function( data ) {
          if(data.status == 'Error'){
            console.log("error");
          }else{
            console.log(data);
            vm.response = data;
          }
        });
    }

    function logout(){
      store.remove('APP_KEY');
      $location.path('/')
    }

  }
})();
