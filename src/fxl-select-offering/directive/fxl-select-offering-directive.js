 (function () {
    'use strict';
   angular.module('TT-UI-CLM.FxlSelectOffering').directive('selectOffering', selectOfferingDetail);
    function selectOfferingDetail() {
        var directive = {
            restrict: 'EA',
            replace: true,
            scope: { 
              list: '=', 
              title: '@',
              schema:'=',
              form:"=",
              model:'='
            },
              controller: 'FxlSelectOfferingCtrl',
              templateUrl: 'directive/fxl-select-offering.tpl.html',
           
        };
        return directive;
    }

})();