// INITILIZE SERVICE
// ============================================================
angular.module("directivePractice").service("lessonService", function($http) {
    // CRUD FUNCTIONS
    // ============================================================
    this.getSchedule = function() {
        return $http.get('schedule.json');
    };
    // OTHER FUNCTIONS
    // ============================================================

});
