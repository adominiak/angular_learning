

angular.module('blogHistory', ['databaseServiceModule'])
  .directive('myappBlogHistory', function() {
    return {
      scope: {},
      templateUrl: 'html/my_app_blog_history.html',
      replace: true,
      controller: 'BlogHistoryControler',
      controllerAs: 'ctrl'
    };
  })
  .controller('BlogHistoryControler',function($scope, DatabaseService) {
  	
  	this.currentStartDate = new Date()
  	this.currentStartDate.setMonth(this.currentStartDate .getMonth()-3);

  	this.currentEndDate = new Date();
  	this.articles = DatabaseService.getArticles(this.currentStartDate);

  	this.loadMore = function(){
  		this.currentStartDate.setMonth(this.currentStartDate .getMonth()-3);
  		this.refresh();
  	}
    this.refresh= function(){
      this.articles = DatabaseService.getArticles(this.currentStartDate);
    }
    this.addArticle = function(newArticle){
      newArticle.date = new Date(newArticle.date);
      DatabaseService.addArticle(newArticle);
      // this.refresh(); //this doesn't work from the add entry
    }
});