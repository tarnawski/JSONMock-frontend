(function () {
  'use strict';

  angular
    .module('JSONMock')
    .directive('application', application);

  /** @ngInject */
  function application() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/pages/dashboard/components/application/application.html',
      controller: applicationController,
      controllerAs: 'application',
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function applicationController(applicationDataService, store, $state) {
    var vm = this;

    activate();

    ////////////

    function activate() {
      applicationDataService.get({id: store.get('APP_KEY')},
        function (data) {
          vm.application = data;
        },
        function () {
          store.remove('APP_KEY');
          $state.go('home', {message: 'Fetch application failed.'});
        });
    }
  }
})();
