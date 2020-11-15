$(function(){
  
    // 點擊按鈕，選單縮放
    $("div.drop-down-one").on("click", function(){
      $("div.article-content-one").slideToggle();
    });
    
  });
  $(function(){
  
    // 點擊按鈕，選單縮放
    $("div.drop-down-one").on("click", function(){
      $("div.drop-down-one").slideToggle();
    });
    
  });
  
  $(function(){
  
    // 點擊按鈕，選單縮放
    $("div.drop-up-one").on("click", function(){
      $("div.article-content-one").slideToggle();
    });
    
  });
  $(function(){
  
    // 點擊按鈕，選單縮放
    $("div.drop-up-one").on("click", function(){
      $("div.drop-down-one").slideToggle();
    });
    
  });