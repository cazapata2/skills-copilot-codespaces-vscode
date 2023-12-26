function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/member/skills.html',
    controller: 'SkillsCtrl',
    controllerAs: 'skillsCtrl',
    bindToController: true
  };
}