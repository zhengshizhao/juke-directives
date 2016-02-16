juke.directive('doubleClick', function ($parse) {
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'    
        },
        link: function(scope, element, attr){
           // var start = $parse(attr.doubleClick);
            element.on('dblclick', function(){
               scope.doubleClick();
                          
            });

        }
    };

   
});