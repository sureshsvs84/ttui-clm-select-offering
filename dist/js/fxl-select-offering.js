/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	module.exports = '@@@@__SOURCE_FILENAME__';
}

(function (window, angular, undefined) {
	"use strict";


// Source: src/fxl-select-offering/app.js
//var app = angular.module('TT-UI-CLM.FxlSelectOffering', ['ngSanitize','schemaForm']);

(function () {
angular.module('TT-UI-CLM.FxlSelectOffering', ['ngSanitize','schemaForm']);
    
 })();

// Source: src/fxl-select-offering/controller/fxl-select-offering-ctrl.js
(function () {
angular.module('TT-UI-CLM.FxlSelectOffering').controller('FxlSelectOfferingCtrl', FxlSelectOfferingCtrl);
    
    FxlSelectOfferingCtrl.$inject = ['$scope','FxlSelectOfferingService'];
        
    function FxlSelectOfferingCtrl($scope,FxlSelectOfferingService) {
        debugger;
        $scope.directivelist = FxlSelectOfferingService.getAllList($scope.list);
          
      }
    
    
})();



// Source: src/fxl-select-offering/directive/fxl-select-offering-directive.js
 (function () {
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

// Source: src/fxl-select-offering/services/fxl-select-offering-services.js
(function() {
debugger;
    angular.module('TT-UI-CLM.FxlSelectOffering')
        .service('FxlSelectOfferingService', FxlSelectOfferingService);

    function FxlSelectOfferingService() {
debugger;
        this.message = '';
        this.getAllList = function (todoMain) {
        this.message = todoMain;
        return this.message;
    };
    }
})();
return angular;
})(window, window.angular);