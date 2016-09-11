$cardscr_offs = 0;
$wrapper_height = 0;
$card_height = 0;
$(document).ready(function () {
    
    $wrapper_height = $("#wrapperbody").height();
    $card_height = $("#wrapperbody").width() * 0.200343;
    $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
    
    $("#log3").html("$card_height : <b>" + $card_height + "</b> px $wraper_height : <b>" + $wrapper_height + "</b> px");

    $('#backplanebackground').toggleClass('animated');


    $(document).mousemove(function (event) {

        cx = Math.ceil($(window).width() / 2.0);
        cy = Math.ceil($(window).height() / 2.0);
        dx = event.pageX - cx;
        dy = event.pageY - cy;

//        console.log(cx, cy, dx, dy);

        tiltx = (dy / cy);
        tilty = -(dx / cx);
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
        degree = (radius * 20);

        $('#basiclevel').css('-webkit-transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        $('#basiclevel').css('transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
    });

    $(window).on('resize', function () {
        $windowheight = $(window).height();
        $windowwidth = $(window).width();

//        $basicwidth = $windowwidth * 0.7;
//        $("#basiclevel").css("width", $basicwidth);
//        $basicheight = $basicwidth * 0.563;
//        $("#basiclevel").css("height", $basicheight);
        
        $basicheight = $windowheight * 0.72;
        $("#basiclevel").css("height", $basicheight);
        $basicwidth = $basicheight * 1.7762;
        $("#basiclevel").css("width", $basicwidth);

        $("#styling3dtransition").css("margin-top", $basicheight / -2);
        $("#styling3dtransition").css("margin-left", $basicwidth / -2);
        
        $wrapper_height = $("#wrapperbody").height();
        $card_height = $("#wrapperbody").width() * 0.200343;
        $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
    });

   

//    var myScroll;
//    myScroll = new IScroll('#wrapperbody', {
//        mouseWheel: true,
//        scrollbars: false,
//        keyBindings: true,
//        probeType: 3,
//        snap: true,
//        
//    });

    
     //var subCatContainer = $(".scroll-container");
    
//    myScroll.on('scroll', function() {
//        $(".sub-scroll-container").scrollTop(- myScroll.y);
//        
//        $scrollchange = $scrollbefore - myScroll.y;
//        $scrollbefore = myScroll.y;
//        $("#log2").html("iscroll : <b>" + $scrollchange + "</b> px");
//        
//    });
    
    $scrollbefore = 0;
    $overallscroll = 0;
    $(".scroll-container").scroll(function() {
        $scrolltop = $(".scroll-container").scrollTop();
        $(".sub-scroll-container").scrollTop($scrolltop);
        
        $scrollchange = $scrollbefore - $scrolltop;
        
        $d_speed -= $scrollchange/80;
        
        $scrollbefore = $scrolltop;
//        $("#log2").html("mousescroll : <b>" + $scrollchange + "</b> px");
        
    });
  
});

$d_pos = $(".dendrarium-txt").scrollTop();
$default_d_speed = 1;
$max_d_speed = 36;
$d_speed = $default_d_speed;
//$easing_d_boud = $default_d_speed * 5;
function repeatOften() {
    if ($d_speed > $max_d_speed) {
        $d_speed = $max_d_speed;
    }
    if ($d_speed < $default_d_speed) {
//        $d_in_bound = Math.abs($default_d_speed) - Math.abs($d_speed);
//        if ($d_in_bound < $easing_d_boud) {
//            
//        } 
        $d_speed += 0.09;
        if ($d_speed > $default_d_speed) {
            $d_speed = $default_d_speed;
        }
    } else if ($d_speed > $default_d_speed) {
        $d_speed -= 0.09;
        if ($d_speed < $default_d_speed) {
            $d_speed = $default_d_speed;
        }
    }
    $d_pos += $d_speed;
    $(".dendrarium-txt").scrollTop($d_pos);
//    $("#log3").html("d_speed : <b>" + $d_speed + "</b> px d_pos : <b>" + $d_pos + "</b> px");
    requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);

setInterval(function(){
    $d_to_end = $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt span").height() - $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt").scrollTop();
    if($d_to_end < 3000) {
        $('.dendrarium-txt span').append("DENDRARIUMDENDRARIUMDENDRARIUM");
//        $("#log4").append("height : <b>" + $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt span").height() + "</b> scrolltop : <b>" + $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt").scrollTop() + "</b> add ");
    }
}, 1000);

function log(txt) {
  $("#log").html("location : <b>" + txt + "</b> px")
}

$(function() {
      var eTop = $('.card3').offset().top; //get the offset top of the element
      log(eTop - $("#wrapperbody").scrollTop()); //position of the ele w.r.t window

      $("#wrapperbody").scroll(function() { //when window is scrolled
        log(eTop - $("#wrapperbody").scrollTop());
      });
});


$set = 1;
$changeinprogress = 0;
$current_card = 0;
function newBackground(num_card) {    
    if ( $changeinprogress == 0 && $current_card != num_card) {
        $changeinprogress = 1;

        wrH = $wrapper_height;
        cH = $card_height;
        cP = $(".card"+num_card).position().top;
        sT = $('#wrapperbody').scrollTop();
        bH = $("#basiclevel").height();
        $("#log4").html("basiclevel : <b>" + bH + "</b> px")
          
        if ( (cP < (sT + (wrH - bH)/2 - cH +(cH/4)) ) || (cP > (sT + wrH - (wrH - bH)/2 -(cH/4)) ) ) {
            $changeinprogress = 0;
        } else {
            if ( (cP < (sT + (wrH - bH)/2 -(cH/8)) ) || (cP > (sT + wrH - (wrH - bH)/2 - cH +(cH/8)) ) ) { 
                $('#wrapperbody').scrollTo($(".card"+num_card),700, {offset: function() { return {top:$cardscr_offs, left:0}; }});
            }
            $('.out-dend-txt-hidescroll').removeClass('recover');

            $('#wrapperbody').css('pointer-events','none');
            $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
            $('.card'+$current_card+' .cardimage').css('margin-left','0');
            $('.card'+$current_card+'.card_top .cardimage').css({"-webkit-filter":"invert(0%)","filter":"invert(0%)"});
            $('.card'+$current_card+'.card_top .selectarrow').css('right','-97%');
            $('.card'+$current_card+'.card_top .selectarrow.arrow_top').css('top','50%');
            $('.card'+$current_card+'.card_top .selectarrow.arrow_bottom').css('top','50%');

            $current_card = num_card;
            if ($set == 1) {
                $('.back_layer.layer4.set2').css('background-image', 'url(./images/scene' + num_card + '/4.png)');
                $('.back_layer.layer3.set2').css('background-image', 'url(./images/scene' + num_card + '/3.png)');
                $('.back_layer.layer2.set2').css('background-image', 'url(./images/scene' + num_card + '/2.png)');
                $('.back_layer.layer1.set2').css('background-image', 'url(./images/scene' + num_card + '/1.png)');
            } else {
                $('.back_layer.layer4.set1').css('background-image', 'url(./images/scene' + num_card + '/4.png)');
                $('.back_layer.layer3.set1').css('background-image', 'url(./images/scene' + num_card + '/3.png)');
                $('.back_layer.layer2.set1').css('background-image', 'url(./images/scene' + num_card + '/2.png)');
                $('.back_layer.layer1.set1').css('background-image', 'url(./images/scene' + num_card + '/1.png)');
            }

            $('.card'+$current_card+' .cardimage').css('margin-left','70%');
            if ( !$('.card'+$current_card+'.card_top .cardimage').hasClass("faded") ) {
                $('.card'+$current_card+'.card_top .cardimage').css({'-webkit-filter':'invert(100%)','filter':'invert(100%)'});
                $('.card'+$current_card+'.card_bottom .cardimage').css({'-webkit-filter':'invert(100%)','filter':'invert(100%)'});
            }

            $('.card'+$current_card+'.card_top .selectarrow.arrow_top').css('top','-6%');
            $('.card'+$current_card+'.card_top .selectarrow.arrow_bottom').css('top','106%');
            $('.card'+$current_card+'.card_top .selectarrow').css('right','-94%');

            $('.out-dend-txt-hidescroll.top-txt').css('opacity','0');

            $('.out-dend-txt-hidescroll.bottom-txt').addClass('ghost');
            setTimeout(function(){ 
                $('.out-dend-txt-hidescroll.bottom-txt').addClass('ghostfly');
            }, 1300);
            setTimeout(function(){ 
                $('.out-dend-txt-hidescroll.bottom-txt').addClass('ghosthide');
            }, 4750);

            setTimeout(function(){ 
                $('.back_layer').addClass("movedown");
                $('#particles-js').addClass("onimagechange");

                $('.card'+$current_card+'.card_bottom .cardimage').addClass("invertback");
                $('.card'+$current_card+'.card_bottom .cardimage').css({'-webkit-filter':'','filter':''});

    //            $('.card'+$current_card+'.card_top .selectarrow').addClass("invertback");
    //            $('.card'+$current_card+'.card_top .selectarrow').css('right','-94%');

                setTimeout(function(){ 
                    $('.back_layer.layer1').css({'-webkit-filter':'blur(3px)','filter':'blur(3px)'});
                    $('.back_layer.layer2').css({'-webkit-filter':'blur(3px)','filter':'blur(3px)'});
                    $('.back_layer.layer3').css({'-webkit-filter':'blur(3px)','filter':'blur(3px)'});
                    }, 0);
                if ($set == 1) {
                    setTimeout(function(){ 
                        $('.back_layer.set2').css('opacity', '1');
                        $('.back_layer.set1').css('opacity', '0');
                    }, 200);
                    $set = 2;
                } else {
                    setTimeout(function(){ 
                        $('.back_layer.set1').css('opacity', '1');
                        $('.back_layer.set2').css('opacity', '0');
                    }, 200);
                    $set = 1;
                }


                setTimeout(function(){ 
                    $('.back_layer').removeClass("movedown");
                    $('.card'+$current_card+'.card_bottom .cardimage').removeClass("invertback");
    //                $('.card'+$current_card+'.card_top .selectarrow').removeClass("invertback");
                    $('.back_layer').css({'-webkit-filter':'','filter':''});
                }, 2100);

                setTimeout(function(){ 
                    $('#particles-js').removeClass("onimagechange");
                },4000);

                setTimeout(function(){ 
                    $('.out-dend-txt-hidescroll.top-txt').css('opacity','0.6');
                    $('.out-dend-txt-hidescroll.bottom-txt').removeClass('ghost');
                    $('.out-dend-txt-hidescroll.bottom-txt').removeClass('ghostfly');
                    $('.out-dend-txt-hidescroll.bottom-txt').removeClass('ghosthide');
                    $('.out-dend-txt-hidescroll').addClass('recover');
                    $('#wrapperbody').css('pointer-events','all');
                    $changeinprogress = 0;
                },4200);
            },1350);
        }
    } else if ( $changeinprogress == 0 && $current_card == num_card) {
        $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
        $('.card'+$current_card+'.card_top .cardimage').css('margin-left','300%');
    }
}







