
$(function load(){
	$("#loading").fadeOut(2000);
});

$(function(){
  
    // hamburger icon 的切換
    $("button.hamburger").on("click", function(){
      $("button.hamburger").toggleClass("is-active");
    });
  
  });

  
  $(function(){

    // 點擊按鈕，選單縮放
    $("button.hamburger").on("click", function(){
      $("div.bar").slideToggle();
    });
    
  });

  

  $(function(){

    // 點擊按鈕，選單縮放
    $("button.openmenu1").on("click", function(){
      $("ul.littleone").slideToggle();
    });
    
  });
  
  

  $(function(){

    // 點擊按鈕，選單縮放
    $("button.openmenu2").on("click", function(){
      $("ul.littletwo").slideToggle();
    });
    
  });


  $(function(){
  
    // 點擊按鈕，選單縮放
    $("button.openmenu3").on("click", function(){
      $("ul.littlethree").slideToggle();
    });
    
  });

  /*切換+-號*/ 
  $(document).ready(function(){
    $("button.openmenu1").click(function(){
      $("button.openmenu1").toggleClass("closemenu");
    });
  });

  $(document).ready(function(){
    $("button.openmenu2").click(function(){
      $("button.openmenu2").toggleClass("close2");
    });
  });

  
  $(document).ready(function(){
    $("button.openmenu3").click(function(){
      $("button.openmenu3").toggleClass("close3");
    });
  });

  