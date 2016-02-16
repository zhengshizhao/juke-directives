juke.controller('cursorCtrl', function($scope, ){
	 $scope.getcursor = function(event){
	 	var clickPosition = event.offsetX;
	 	
	 	clickPosition / xti * songduration
         console.log(event.offsetX, event.offsetY);
      }

})