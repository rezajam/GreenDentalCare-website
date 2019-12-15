// (function($) {
//   $.fn.nodoubletapzoom = function() {
//       $(this).bind('touchstart', function preventZoom(e) {
//         var t2 = e.timeStamp
//           , t1 = $(this).data('lastTouch') || t2
//           , dt = t2 - t1
//           , fingers = e.originalEvent.touches.length;
//         $(this).data('lastTouch', t2);
//         if (!dt || dt > 500 || fingers > 1) return; // not double-tap
//
//         e.preventDefault(); // double tap - prevent the zoom
//         // also synthesize click events we just swallowed up
//         $(this).trigger('click').trigger('click');
//       });
//   };
// })(jQuery);


var flossCount = 0;
var drCount = 0;
var offSet = 3;

var cookieCount = 0;
var jadidCookie = 0;


function add(){
  cookieCount++;
  // document.getElementById("text").value  = cookieCount;
  // document.title = cookieCount + " Cookies";
  someOtherOtherCode();

  $(".cookieCanvas").addClass("donime1");
  // $(".cookieCanvas").removeClass("donime").delay( 1000000 );
  setTimeout(function () {
  $(".cookieCanvas").removeClass("donime1");
}, 100);

  $(".Dr").on("click", function adddis(){
    cookieCount = cookieCount + 50;
    $(".progress-bar").stop();
    $(".progress-bar").css("width", "0");
    time = 8000;
    // document.getElementById("text").value  = cookieCount;
    // document.title = cookieCount + " Cookies";
    // someOtherCode();
    // setTimeout (adddis, 4000);
    document.getElementById("text").value  = cookieCount;
    document.title = " Score: " + cookieCount ;
    // setTimeout (someOtherCode, 4000);
    drCount = 0;
    $(".cookieCanvas").addClass("donime2");
    // $(".cookieCanvas").removeClass("donime").delay( 1000000 );
    setTimeout(function () {
    $(".cookieCanvas").removeClass("donime2");
  }, 100000);
    $(".Dr").fadeOut();
    someCode();
    someOtherCode();
    blimbloom();

  });

  // $(".Dr").on("click", function(){
  //   cookieCount++;
  //   document.getElementById("text").value  = cookieCount;
  //   document.title = cookieCount + " Cookies";
  //   someOtherCode();
  //   // setTimeout (someOtherCode, 4000);
  // });

  flossPower();
  // document.getElementById("cookieCanvas").innerHTML = "<div  class=\"plusOneCanvas\">+1</div>";
  // documentgetElementById("cookieCanvas").innerHTML = "<div  class=\"plusOneCanvas\">+8</div>";
  // var div = document.getElementById("cookieCanvas").appendChild(div);
  // div.innerHTML = "<div  class=\"plusOneCanvas\">+1</div>";


  // if( (cookieCount % 20) == 0){
  // if( cookieCount  == 20){
  //     $(".powerBubblesList").ready(function(){
  //         $(".powerBubblesList").append("<button type=\"button\" class=\"btn btn-primary\">Flossing</button>");
  //     });

    // $(document).ready(function(){
    //     $(".powerBubblesList").click(function(){
    //         $(".powerBubblesList").append("<button type="button" class=\"btn btn-primary\">Flossing</button>");
    //       });
    //   });
    // document.title = "Flossing";
    // $(".powerBubblesList").add("<button type="button" class=\"btn btn-primary\">Flossing</button>");
  // }
  // $('.powerBubblesList').append(cookieCount == 30 ? "<button type="button" class=\"btn btn-primary\"></button>");

  // if( cookieCount  == 20)

// }


// $(document).ready(function(){








// $(document).ready(function(){
//   if( ((cookieCount % 20) == 0) || (flossCount >1)){
//     flossCount++;
//     $(".Flossing").text("Flossing "+ flossCount);
// }
//
//   //
//   // $(".Flossing").on("click", function(){
//   //   $(".progress-bar").stop();
//   //   $(".progress-bar").css("width", "0");
//   //   time = time - 50;
//   //   $(".Flossing").text( "Flossing "+ flossCount - 1);
//   //   someCode();
//   //
//   //   // return false;
//   // });
//
// });

document.getElementById("text").value  = cookieCount;

document.title = " Score: " + cookieCount;

};



function flossPower() {


      // $(".powerBubblesList").ready(function(){
        if( ((cookieCount % offSet) == 0) && (flossCount == 0)){
          flossCount++;
        // if( (cookieCount % 20) == 0){
          $(".powerBubblesList").append("<button type=\"button\" id=\"flossin\" class=\"btn Flossing\">Flossing</button>");
          // document.title = flossCount;
        }

        else if( ((cookieCount % offSet) == 0) && (flossCount >=1)){
          flossCount++;
          // $(".Flossing").text("Flossing "+ flossCount);
          // document.title = flossCount;
        }

        // return false;
      // });


        if( ((cookieCount % 100 ) == 0) && (drCount == 0)){
          drCount++;
        // if( (cookieCount % 20) == 0){
          $(".powerBubblesList").append("<button type=\"button\" id=\"dr\" class=\"btn Dr\">Dentist Visit</button>");
          // document.title = drCount;
        }

        else if( ((cookieCount % 100 ) == 0) && (drCount >=1)){
          drCount++;
          $(".Dr").text("Dentist Visit"+ drCount);
          // document.title = drCount;
        }





    // $(document).ready(function(){
    //     $(".powerBubblesList").click(function(){
    //         $(".powerBubblesList").append("<button type="button" class=\"btn btn-primary\">Flossing</button>");
    //       });
    //   });
    // document.title = "Flossing";
    // $(".powerBubblesList").add("<button type="button" class=\"btn btn-primary\">Flossing</button>");
    $(".Flossing").on("click", function(){
      $(".progress-bar").stop();
      $(".progress-bar").css("width", "0");
      time = time - 80;
      // $(".cookieCanvas").addClass("donime");
      $(".cookieCanvas").attr('id', 'donime');
      // $(".cookieCanvas").removeClass("donime").delay( 1000000 );
      setTimeout(function () {
      // $(".cookieCanvas").removeClass("donime");
      $(".cookieCanvas").removeAttr('id');
      }, 1000);

      // $(".cookieCanvas").removeClass("donime").delay(1000);

        // $(".powerBubblesList").ready(function(){
          // if( flossCount == 1){
          //   $(".Flossing").remove();
          //   flossCount = 0;
          // }
          if( flossCount >= 2){
            // var flossCountCam = 3;
            flossCount--;
            // $(".Flossing").text( "Flossing "+ flossCount);
            // document.getElementsByClassName("Flossing").innerHTML = "Flossing Cam shod";
            // flossCount = flossCountCam;

            // document.title = flossCount;    for check

            // return false;

          }

          if( flossCount == 1){
            flossCount--;
            $(".Flossing").fadeOut(100);
            // document.title = flossCount;

          }
        // });

      // if( flossCount == 1){$(".Flossing").remove();}
      // if( flossCount > 1){$(".Flossing").text( "Flossing "+ flossCount);}
      // $(".Flossing").remove();
      // $(".Flossing").text( "Flossing "+ flossCount);
      // $(".cookieCanvas").css("background-image" , "url(\"/Users/mahmoudrezaeskandarijam/Documents/UTM/cod2ni/Portfolio/CookieTest/02 Floss bckgrnd.png\")");
      // $(".cookieCanvas").css("background-image" , "url(\"/Users/mahmoudrezaeskandarijam/Documents/UTM/cod2ni/Portfolio/CookieTest/Dandun bckgrnd.png\")").delay( 800 ).fadeIn( 400 );
      someCode();
      glyphFloss();

      // blimbloom();
      });







}


var time = 10000;


// var time = 1000;
// var time = 100000;

//

function someCode(){
// $(document).ready(function(){
  // $(".Flossing .HygeineDr").click( function(){
  //
  // });
  $(".progress-bar").animate({"width": "100%"}, time , function(){
    // $(".wholeGameCanvas").fadeOut();
    // $(document).append("<div class=\"GameOver\">GameOver BABY</div>");
    document.title = "GameOver";
    $(".wholeGameCanvas").fadeOut(300, function() {
       $("body").append($(" <div class=\"GameOver\"> <div id= \"topEnd\"></div>  Game Over</div>  <button class=\"TryAgain\"> Try Again</button> ").fadeIn(3000));
       document.getElementById("topEnd").innerHTML  = "Score: "+cookieCount;
       $(".TryAgain").on("click", function() {
         location.reload();
         // $(".GameOver").remove();
         // $(".TryAgain").remove();
         // $(".wholeGameCanvas").fadeIn(500);
       });

     });
  });



};

// [1,2,3].forEach(function someOtherCode(i){


function someOtherCode(){
  // [1,2,3].forEach(function(i) {

    $(".cookieCanvas").append("<div class=\"plusOneCanvas glyphicon glyphicon-plus-sign\"></div>");
    $(".plusOneCanvas").animate({top: '-60px',opacity:'0'}, 400,"linear",function()
                {
                    $(this).remove();
                });




  // });
// });
};


function glyphFloss(){
  // [1,2,3].forEach(function(i) {

    $(".cookieCanvas").append("<div class=\"plusOneCanvas glyphicon glyphicon-backward\"></div>");
    $(".plusOneCanvas").animate({top: '-60px',opacity:'0'}, 400,"linear",function()
                {
                    $(this).remove();
                });




  // });
// });
};


// function dis() {
//   $(".progress-bar").stop();
  // $(".progress-bar").css("width", "0");
  // $(".progress-bar").someCode();
// }

// setTimeout (dis, 2500);

// $('.Flossing').click(dis);


// $(document).ready(function(){


// });


function someOtherOtherCode(){
    // $(".cookieCanvas").click(function(){
        $(".cookieCanvas").append("<div class=\"plusOneCanvas\">+1</div>");
        $(".plusOneCanvas").animate({top: '200px',opacity:'0'}, 400,"linear",function()
                    {
                        $(this).remove();
                    });
    // });
};

// $(".TryAgain").on("click", function() {
//   $(".GameOver").remove();
//   $(".wholeGameCanvas").fadeIn(500);
// });

// glyphicon glyphicon-backward
