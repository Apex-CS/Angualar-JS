const app = angular.module('app', []);

app.directive('compileCycleExample', function () {
    return {
        compile: (templateElement, templateAttributes) => {
            const msg = `Compile ${templateAttributes.name} ${templateAttributes.id}`;
            console.log(msg)

            return {
                pre: (scope, instanceElement, instanceAttributes) => {
                    scope.random = Math.random();
                    const msg = `PreLink ${instanceAttributes.name} ${instanceAttributes.id}`;
                    console.log(msg, scope.random)
                },
                post: (scope, instanceElement, instanceAttributes) => {
                    const msg = `PostLink ${instanceAttributes.name} ${instanceAttributes.id}`;
                    console.log(msg, scope.random)
                }
            }
        },
        controller: ($scope, $element, $attrs) => {
            const msg = `Controller ${$attrs.name} ${$attrs.id}`;
            $scope.random = Math.random();
            console.log(msg, $scope.random);
        }
    };
});
