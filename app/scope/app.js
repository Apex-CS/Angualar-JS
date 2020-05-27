const app = angular.module('app', []);

app.controller('testCtrl', function ($scope) {
    $scope.papa = 'controlador'
    $scope.sendAlert = () => alert("El Nombre" + $scope.nombre)
});

app.directive('dNoScope', function () {
    return {
        templateUrl: './template.html',
        scope: false
    };
});

app.directive('dScope', function () {
    return {
        templateUrl: './template.html',
        scope: true,
        controller: function ($scope, $element, $attrs) {
            $scope.papa = "Directiva con Scope"
            $scope.sendAlert = () => alert("El apellido " + $scope.apellido)

        }
    };
});

app.directive('dMappingScope', function () {
    return {
        templateUrl: './template.html',
        restrict: "E",
        scope: {
            papa: '@',
            nombre: '=',
            sendAlert: '&',
        },
    };
});
