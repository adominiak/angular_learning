angular.module('databaseServiceModule', [])
.filter('isAfter', function () {
  return function (items,date) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.date > date) {
        filtered.push(item);
      }
    }
    return filtered;
  };
})
.factory('DatabaseService', function($http, $filter) {
var articles = [
  	{
  		title : "my first entry",
  		body : "blabla",
  		date : new Date(2014,10,3)		
  	},
  	{
  		title : "my second entry",
  		body : "blabla",
  		date : new Date(2015,3,3)
  	}
  	];
return {

	getArticles : function( startDate){
		return $filter('isAfter')(articles,startDate);
	}

}
});