juke.controller('cursorCtrl', function($scope, PlayerFactory){
  
	 $scope.getcursor = function(event){
       
       
	   var clickPosition = event.offsetX;
       
	   var barPosition = event.toElement.clientWidth;
       
       var position = clickPosition/barPosition
       
       PlayerFactory.changePlayPoint(position)
       
      }

})