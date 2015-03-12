angular.module('myAppBlogEntryForm', [])
  .directive('myappBlogEntryForm', function() {
    return {
      restrict: 'AE',
      scope: {
        addArticle: '='
      },
      templateUrl: 'html/my_app_blog_entry_form.html',
      replace: true,
      controller: 'BlogEntryFormControler',
      controllerAs: 'ctrl'
    };
  })
  .controller('BlogEntryFormControler', function($scope) {
    this.article = {};
    this.save = function() {
      $scope.addArticle(this.article);
      this.article = {};
    };
  });