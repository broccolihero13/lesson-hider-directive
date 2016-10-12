// INITILIZE CONTROLLER
// ============================================================
angular.module("directivePractice").controller("lessonCtrl", function($scope) {
    // VARIABLES
    // ============================================================
    // $scope.test = 'Two-way data binding!';
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    // FUNCTIONS
    // ============================================================
    $scope.announceDay = function(lesson, day, state) {
        if (state) {
            alert(lesson + " is active on " + day + '.');
        }
    };
});
