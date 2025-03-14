function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/viewsmember.html',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}