(function () {
  'use strict';

  angular
    .module('JSONMock')
    .directive('responseUnique', responseUnique);

  /** @ngInject */
  function responseUnique(responseDataService, store) {
    var directive = {
      require: 'ngModel',
      restrict: 'A',
      link: linkFunc,
      scope: {
        'method': '='
      }
    };

    return directive;

    function linkFunc(scope, elem, attrs, ctrl) {
      //Fetch all responses
      responseDataService.query({id: store.get('APP_KEY')},
        function (data) {
          var requestMethod = '#' + attrs.patchCh;
          elem.add(requestMethod).on('keyup change', function () {
            scope.$apply(function () {
              ctrl.$setValidity('requestUnique', true);
              if ($(requestMethod).val() != "? undefined:undefined ?") {
                data.forEach(function (element, index) {
                  if (element.method == $(requestMethod).val() && element.url == elem.val()) {
                    ctrl.$setValidity('requestUnique', false);
                  }
                });
              }
            });
          });
        });
    }
  }
})();
