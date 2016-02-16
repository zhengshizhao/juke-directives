'use strict';

juke.directive('albumList', function (AlbumFactory){
  return {
    restrict: 'E',
    templateUrl: 'js/album/templates/album-list.html',
    scope: {
      albums: '='
    }
  }
})