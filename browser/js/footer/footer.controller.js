juke.controller('cursorCtrl', function($scope, PlayerFactory){
  
	  var progressWidth;

	 $scope.getcursor = function(event){
	   var clickPosition = event.offsetX;
	   if (event.toElement === 'div.progress') {
	   		progressWidth = event.toElement.clientWidth;
	   } 
	   else {
	   	 progressWidth =  event.toElement.parentElement.clientWidth;
	   }
       var position = clickPosition/progressWidth
       
       PlayerFactory.changePlayPoint(position)
       
      }
})