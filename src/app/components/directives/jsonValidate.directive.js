(function () {
  'use strict';

  angular
    .module('JSONMock')
    .directive('jsonValidate', jsonValidate);

  /** @ngInject */
  function jsonValidate() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        function customValidator(ngModelValue) {
          if (isJsonString(ngModelValue)) {
            ctrl.$setValidity('json-validate', true);
          } else {
            ctrl.$setValidity('json-validate', false);
          }

          return ngModelValue;
        }

        ctrl.$parsers.push(customValidator);
      }
    };

    function isJsonString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
  }

})();
