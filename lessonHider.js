// INITILIZE DIRECTIVE
// ============================================================
angular.module("directivePractice").directive('lessonHider', function() {
    return {
        restrict: 'EA',
        templateUrl: './lessonHider.html',
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();

        },
        scope: {
            test: '=',
            lesson: '=',
            dayAlert: '&',
            newState: '&'
        },
        link: function(scope, element, attribute) {
            // console.log(scope, element, attribute);
            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;
                scope.schedule.forEach(function(scheduleDay) {
                    if (scheduleDay.lesson === scope.lesson) {
                        element.css('text-decoration', 'line-through');
                        if (scheduleDay.weekday) {
                            scope.state = true;
                        } else {
                            scope.state = false;
                        }
                        scope.lessonDay = scheduleDay.weekday;
                        console.log(scope.schedule);
                        return;
                    }
                });
            });

            scope.newState = function(newDay) {
                var daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
                var fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                for (var i = 0; i < daysOfWeek.length; i++) {
                    if (newDay.substring(0, 3).toLowerCase() === daysOfWeek[i]) {
                        newDay = fullDays[i];
                        scope.lessonDay = newDay;
                        scope.state = true;
                        element.css('text-decoration', 'line-through');
                        scope.newDay = '';
                        return newDay;
                    }
                }
                alert(newDay + " is not a valid day");
                scope.newDay = '';
            };
            scope.delState = function() {
                scope.lessonDay = '';
                scope.state = false;
                element.css('text-decoration', 'none');
            };
        }
    };
});
