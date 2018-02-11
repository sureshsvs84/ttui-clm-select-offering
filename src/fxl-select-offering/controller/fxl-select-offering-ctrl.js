(function () {
    'use strict';
    angular.module('TT-UI-CLM.FxlSelectOffering').controller('FxlSelectOfferingCtrl', FxlSelectOfferingCtrl);
    
    FxlSelectOfferingCtrl.$inject = ['$scope','FxlSelectOfferingService'];
        
    function FxlSelectOfferingCtrl($scope,FxlSelectOfferingService) {
        debugger;
        $scope.directivelist = FxlSelectOfferingService.getAllList($scope.list);
          
      }
    
    
})();

