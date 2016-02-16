'use strict';

juke.directive('albumList', function (AlbumFactory){
  return {
    restrict: 'E',
    templateUrl: 'js/album/templates/album-list.html',
    scope: {
      albums: '='
    },
    link: function (scope){
      AlbumFactory.fetchAll()
      .then(function (albums){
        scope.albums = albums;
      })
    }
  }
})