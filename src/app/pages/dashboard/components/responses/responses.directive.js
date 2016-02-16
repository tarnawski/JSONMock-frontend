(function () {
    'use strict';

    angular
        .module('JSONMock')
        .directive('responses', responses);

    /** @ngInject */
    function responses() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/pages/dashboard/components/responses/responses.html',
            controller: responsesController,
            controllerAs: 'responses',
            bindToController: true,
            scope: {
                response: '='
            }
        };

        return directive;
    }
    /** @ngInject */
    function responsesController(responseDataService, store, $state) {
        var vm = this;
        vm.changeResponse = changeResponse;

        activate();

        ////////////

      function activate() {
          responseDataService.query({id: store.get('APP_KEY')},
            function(data){
              vm.responses = data;
            },
            function(){
              store.remove('APP_KEY');
              $state.go('home', { message: 'Fetch responses failed.'});
            });

        }

      function changeResponse(response) {
            vm.response = response.id;
      }
    }
})();
