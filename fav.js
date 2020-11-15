


    $(document).ready(function(){
        $(".heartone").hover(
           function() {
              $(this).attr("src","./images/favorite.png");
           },
           function() {
              $(this).attr("src","./images/nofavorite.png");
           }
        );
     });