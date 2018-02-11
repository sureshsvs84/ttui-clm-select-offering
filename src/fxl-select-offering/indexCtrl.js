(function () {
    'use strict';
    angular.module('TT-UI-CLM.FxlSelectOffering').controller('indexCtrl', indexCtrl);
   
    indexCtrl.$inject = ['$scope'];
        
    function indexCtrl($scope) {
        $scope.todoMain = [{
          name: 'MainCreate a custom directive',
          completed: true
        }, {
          name: 'MainLearn about restrict test',
          completed: true
        }]
          
        $scope.schemaObject = {

        "type": "object",
        "title": "Comment",
        "properties": {
          "name": {
            "title": "Name",
            "type": "string",
            "required":true
          },
          "email": {
            "title": "Email",
            "type": "string",
            "pattern": "^\\S+@\\S+$",
            "description": "Email will be used for evil."
          },
          "comment": {
            "title": "Comment",
            "type": "string",
            "maxLength": 20,
            "validationMessage": "Don't be greedy!"
          }
        },
        "required": [
          "email",
          "comment"
        ]
    
      };
    $scope.schemaForm = [    
        "test", {
          key: "name",
          // feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"
    
        }, {
          key: "email",
          // feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"
    
        }, {
          key: "comment",
          type: "textarea",
          placeholder: "Make a comment",
          // feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"
    
        }, {
          type: "submit",
          style: "btn-info",
          title: "OK"
        },
    
      ];
    $scope.schemaModel = {};
      
          
      }
    
    
})();

