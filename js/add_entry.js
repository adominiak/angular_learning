// angular.module('blogHistory', ['databaseServiceModule'])
//   .controller('BlogHistoryControler',function($scope, DatabaseService) {
  	
//   	this.currentStartDate = new Date()
//   	this.currentStartDate.setMonth(this.currentStartDate .getMonth()-3);

//   	this.currentEndDate = new Date();
//   	this.articles = DatabaseService.getArticles(this.currentStartDate);

//   	this.loadMore = function(){
//   		this.currentStartDate.setMonth(this.currentStartDate .getMonth()-3);
//   		this.articles = DatabaseService.getArticles(this.currentStartDate);
//   	}
// });