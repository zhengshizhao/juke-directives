'use strict';

juke.controller('SidebarCtrl', function ($scope, PlayerFactory) {

	$scope.getCurrentSong = PlayerFactory.getCurrentSong;
	$scope.getTime = PlayerFactory.getTime;
  // nothing to see here for now… state transitions happening with ui-sref!

});
