'use strict';

juke.directive('songList', function (){
  return {
    restrict: 'E',
    templateUrl: 'js/song-list.html',
    scope: {
      type: '='
    }
  }
})