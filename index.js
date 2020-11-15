
function load(){
	$("#loading").fadeOut(1500);
}
window.addEventListener("load",load, false);

setTimeout(function(){
  $("#loading").fadeOut(1500);
},1500);



$(document).ready(function (){

  // Wrap every letter in a span
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  
  .add({
    
    opacity: 0,
    
    duration: 1950,
  })
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1950,
    delay: (el, i) => 190*i
  });

  var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
  opacity:[0,0],
  
  duration: 1950,
})
  .add({
    targets: '.ml3 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1950,
    delay: (el, i) => 190*i
  });
  var textWrapper = document.querySelector('.ml4');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
  .add({
    opacity:[0,0],
    
    duration: 1950,
  })
    .add({
      targets: '.ml4 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1950,
      delay: (el, i) => 190*i
    });
    var textWrapper = document.querySelector('.ml5');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
  .add({
    opacity:[0,0],
    
    duration: 1950,
  })
    .add({
      targets: '.ml5 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1950,
      delay: (el, i) => 190*i
    });
    var textWrapper = document.querySelector('.ml6');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
  .add({
    opacity:[0,0],
    
    duration: 1950,
  })
    .add({
      targets: '.ml6 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1950,
      delay: (el, i) => 190*i
    });

  
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




