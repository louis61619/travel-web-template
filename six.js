
$(".add-fav").click(function(){                         //click事件
    $(this).toggleClass("add-nofav");
    
});

$(".add-fav").click(function(){                         //click事件
    var div=$(this);
    div.animate({height:'50px',width:'50px'},"fast");
    div.animate({width:'40px',height:'40px'},"fast");
    
    
});



