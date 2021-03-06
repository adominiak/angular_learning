angular.module('myAppLoginForm', [])
  .directive('myappLoginForm', function() {
    return {
      restrict: 'AE',
      scope: {},
      templateUrl: 'html/my_app_login.html',
      replace: true,
      controller: 'LoginFormControler',
      controllerAs: 'ctrl'
    };
  })
  .controller('LoginFormControler', function() {
    
    this.response = "Enter login details";
    this.login = function() {
      this.response = "Successful login!";
    };
  });



angular.module('myApp', ['myAppLoginForm', 'myAppBlogEntryForm', 'blogHistory']);