

$set = 1;
$changeinprogress = 1;
$current_card = -1;
function newBackground(num_card) { 
    if (num_card == 0) {$changeinprogress = 0;}
    if ( $changeinprogress == 0 && $current_card != num_card) {
        $changeinprogress = 1;
        
        if (num_card == 0) {
            $('#wrapperbody').css('opacity','1');
            $('#wrapperbody2').css('opacity','1');
            $("#loadwheel").fadeOut(1000, function() { $("#loadwheel").remove(); });
        }
        
        if (num_card > 0) {
            wrH = $wrapper_height;
            cH = $card_height;
            cP = $(".card"+num_card).position().top;
            sT = $('#wrapperbody').scrollTop();
            bH = $("#basiclevel").height();

                if ( (cP < (sT + (wrH - bH)/2 - cH +(cH/4)) ) || (cP > (sT + wrH - (wrH - bH)/2 -(cH/4)) ) ) {
                    $changeinprogress = 0;
                    return;
                }        
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
        }

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
        
        if (num_card > 0) {
            $('.card'+$current_card+' .cardimage').css('margin-left','67%');//70%
            if ( !$('.card'+$current_card+'.card_top .cardimage').hasClass("faded") ) {
                $('.card'+$current_card+'.card_top .cardimage').css({'-webkit-filter':'invert(100%)','filter':'invert(100%)'});
                $('.card'+$current_card+'.card_bottom .cardimage').css({'-webkit-filter':'invert(100%)','filter':'invert(100%)'});
            }

            $('.card'+$current_card+'.card_top .selectarrow.arrow_top').css('top','-4%');//-6%
            $('.card'+$current_card+'.card_top .selectarrow.arrow_bottom').css('top','104%');//100%
            $('.card'+$current_card+'.card_top .selectarrow').css('right','-94%');
        }
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
            
            if (num_card > 0) {
                $('.card'+$current_card+'.card_bottom .cardimage').addClass("invertback");
                $('.card'+$current_card+'.card_bottom .cardimage').css({'-webkit-filter':'','filter':''});
            }

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
                if (num_card > 0) {
                    $('.card'+$current_card+'.card_bottom .cardimage').removeClass("invertback");
                }
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
                if ($idle) {
                    $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
                    $('.card'+$current_card+'.card_top .cardimage').css('margin-left','300%');
                }
                $changeinprogress = 0;
            },4200);
        },1350);
    } else if ( $changeinprogress == 0 && $current_card == num_card) {
        $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
        $('.card'+$current_card+'.card_top .cardimage').css('margin-left','300%');
    }
}  

var myTracks = [
    {starttime: 0, position: 0 }, // first track
//    {starttime: 21951, position: 0 },
    {starttime: 90312, position: 0 }, //last track
    {starttime: 123491, position: 0 } //end
];

//values 4 dendrarium scroller
$d_pos = $(".dendrarium-txt").scrollTop();
$default_d_speed = 1;
$max_d_speed = 36;
$d_speed = $default_d_speed;
$d_breaks = 0.09;
$default_d_speed_save = $default_d_speed;

$cardscr_offs = 0;
$wrapper_height = 0;
$card_height = 0;
$empty_height = 0;

$current_track = -1;
$mix_time = 0;
$arrow_step = 0;
$arrow_pos = 0;
$window_resized = false;
$no_rewind = true;
$firstplay = true;
$idle = false;
$scrollidlefix_height = 0;

var currentMousePos = { x: -1, y: -1 };
$(document).ready(function () {
    
    speed_percent = $('#basiclevel').height() / 533;
    if (speed_percent > 1){
        $default_d_speed = 1 * speed_percent;
        $default_d_speed_save = $default_d_speed;
        $max_d_speed = 36 * speed_percent;
        $d_breaks = 0.09 * speed_percent;
    }
    
    $empty_height = $("#wrapperbody").width() * 0.3;
    $(".emptycardspase").css("height",$empty_height);
    $empty_height = $(".emptycardspase").height();
     
    $wrapper_height = $("#wrapperbody").height();
    $card_height = $("#wrapperbody").width() * 0.200343;
    $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
    $scrollidlefix_height = $(".description").height() + parseInt($(".description").css("padding-top")) + parseInt($(".description").css("padding-bottom"));
    
        /////
    $("#log3").append("description height : <b>" + $scrollidlefix_height + "</b> px ");
//    $("#log3").append("$empty_height : <b>" + $empty_height + "</b> px ");
//    $("#log3").append("$card_height : <b>" + $card_height + "</b> px ");
//    $("#log3").append(".card1.card.card_bot : <b>" + $('.card1.card.card_bottom').height() + "</b> px ");
        //////

    
    $('#backplanebackground').toggleClass('animated');
    
    
    var iframeElement   = document.querySelector('iframe');
    var widget         = SC.Widget(iframeElement);
    widget.bind(SC.Widget.Events.READY, function() {
        widget.bind(SC.Widget.Events.PLAY, function() {
            if ($firstplay) {
                $("#skplayer iframe").css({"-webkit-filter":"brightness(420%) grayscale(100%) drop-shadow(0px 0px 1px #3A3A3A)","filter":"brightness(420%) grayscale(100%) drop-shadow(0px 0px 1px #3A3A3A)"});
                $('.card1.card.card_bottom').imagesLoaded( function() {
                    $card_height = $('.card1.card.card_bottom').height();
                    $wrapper_height = $("#wrapperbody").height();
                    $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
                    
                    for (i = 0; i < myTracks.length; i++) {
                        myTracks[i].position = $card_height/2 + i * ($empty_height + $card_height);
                    }
                    
                    $("#playarrow").css("top",myTracks[0].position);  
                    
                    $arrow_step = (myTracks[1].position - myTracks[0].position) / (myTracks[1].starttime - myTracks[0].starttime);
                    
                    $current_track = 0;
                    newBackground(0);
                    
                    widget.getDuration(function(duration) {
                        $mix_time = duration;
                        myTracks[myTracks.length - 1].starttime = $mix_time;
                    });
                    
                    $firstplay = false;
                });
            }
            $("#playarrow").css("opacity","1");
            $default_d_speed = $default_d_speed_save;
            $("#log4").append("SCplayer : <b> PLAY </b> px $mix_time ON PLAY : <b>" + myTracks[myTracks.length - 1].starttime + "</b> ms ");
        });
    });
    
    
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
        widget.getPosition(function(pos) {
//            $("#log2").html("SCplayer position: <b>"+ position +"</b> ms");
            if(!$firstplay){
                if (myTracks[$current_track].starttime < pos && myTracks[$current_track+1].starttime > pos && !$window_resized){
                    arrow_pos_old = $arrow_pos;
                    $arrow_pos = myTracks[$current_track].position + $arrow_step * (pos - myTracks[$current_track].starttime);
                    if ($arrow_pos - arrow_pos_old > 100) {
                        $no_rewind = false;
                    }
                } else {
                    i = myTracks.length - 1;
                    while (i >= 0 && pos < myTracks[i].starttime) {
                        i = i - 1;
                    }
                    $("#log2").html("i: <b>"+ i +"</b> ms");
                    percent_new_track_left = (myTracks[i+1].starttime - pos)/(myTracks[i+1].starttime - myTracks[i].starttime);
                    $arrow_pos = myTracks[i].position + (myTracks[i+1].position - myTracks[i].position)*percent_new_track_left;
                    $arrow_step = ((myTracks[i+1].position - myTracks[i].position)*percent_new_track_left) / (myTracks[i+1].starttime - pos);
                    
                    if($idle) { 
                        newBackground(i+1);
                    } else {
                        n = i - 1;
                        if (n == $current_track && percent_new_track_left > 0.99 && $no_rewind){
                            n = n + 1;
                            $('.card'+ n +'.card_top .cardimage').addClass("faded");
                        }
                    }
                    if (percent_new_track_left > 0.99) {
                        $no_rewind = true;
                    } else {
                        $no_rewind = false;
                    }
                    $window_resized = false;
                    $current_track = i;
                }
            }
        });
    });
    
    
    widget.bind(SC.Widget.Events.FINISH, function() {
        last = myTracks.length - 1
        if ($no_rewind) {
            $('.card'+ last +'.card_top .cardimage').addClass("faded");
        }
        newBackground(last + 1);
        $("#playarrow").css("opacity","0");
    });
    
    
    widget.bind(SC.Widget.Events.PAUSE, function() {
        $default_d_speed = 0;
    });
    

    $(document).mousemove(function (event) {
        if ($idle) {
            if(event.pageX != currentMousePos.x || event.pageY != currentMousePos.y) {
                $idle = false;
                $("#log2").html("idle : <b>" + false + "</b> px");
                $('#wrapperbody').css('pointer-events','all');
                $('#wrapperbody').css('opacity','1');
                $('#wrapperbody2').css('opacity','1');
            }
        } else {
            cx = Math.ceil($(window).width() / 2.0);
            cy = Math.ceil($(window).height() / 2.0);
            dx = event.pageX - cx;
            dy = event.pageY - cy;

            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;

            tiltx = (dy / cy);
            tilty = -(dx / cx);
            radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
            degree = (radius * 20);

            $('#basiclevel').css('-webkit-transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
            $('#basiclevel').css('transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        }
    });

    
    $(window).on('resize', function () {
        $windowheight = $(window).height();
        $windowwidth = $(window).width();
        
        $basicheight = $windowheight * 0.72;
        $("#basiclevel").css("height", $basicheight);
        $basicwidth = $basicheight * 1.7762;
        $("#basiclevel").css("width", $basicwidth);

        $("#styling3dtransition").css("margin-top", $basicheight / -2);
        $("#styling3dtransition").css("margin-left", $basicwidth / -2);
        
        speed_percent = $('#basiclevel').height() / 533;
        if (speed_percent > 1){
            $default_d_speed = 1 * speed_percent;
            $default_d_speed_save = $default_d_speed;
            $max_d_speed = 36 * speed_percent;
            $d_breaks = 0.09 * speed_percent;
        }
        
        $empty_height = $("#wrapperbody").width() * 0.3;
        $(".emptycardspase").css("height",$empty_height);
        $empty_height = $(".emptycardspase").height();
        $wrapper_height = $("#wrapperbody").height();
        $card_height = $("#wrapperbody").width() * 0.200343;
        $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
        $scrollidlefix_height = $(".description").height() + parseInt($(".description").css("padding-top")) + parseInt($(".description").css("padding-bottom"));
        
        for (i = 0; i < myTracks.length; i++) {
            myTracks[i].position = $card_height/2 + i * ($empty_height + $card_height);
        }
        $window_resized = true;
    });

    
    $scrollbefore = 0;
    $overallscroll = 0;
    $(".scroll-container").scroll(function() {
        $scrolltop = $(".scroll-container").scrollTop();
        $(".sub-scroll-container").scrollTop($scrolltop);
        
        $scrollchange = $scrollbefore - $scrolltop;
        
        $d_speed -= $scrollchange/80;
        
        $scrollbefore = $scrolltop;    
    });
    
    
    $(document).idle({
      onIdle: function(){
        $('#wrapperbody').css('pointer-events','none');
        $('#wrapperbody').css('opacity','0');
        $('#wrapperbody2').css('opacity','0');
        setTimeout(function(){ 
            $('#wrapperbody').css('opacity','1');
            $('#wrapperbody2').css('opacity','1');
            $idle = true;
            $("#log2").html("idle : <b>" + true + "</b> px");
        }, 2100);

        $("#log").html("$onIdle : <b> RUN </b> px");
          
      },
      idle: 5000
    });

  
});

function repeatOften() {
    if ($d_speed > $max_d_speed) {
        $d_speed = $max_d_speed;
    }
    if ($d_speed < $default_d_speed) {
        $d_speed += $d_breaks;
        if ($d_speed > $default_d_speed) {
            $d_speed = $default_d_speed;
        }
    } else if ($d_speed > $default_d_speed) {
        $d_speed -= $d_breaks;
        if ($d_speed < $default_d_speed) {
            $d_speed = $default_d_speed;
        }
    }
    $d_pos += $d_speed;
    $(".dendrarium-txt").scrollTop($d_pos);
//    $("#log3").html("d_speed : <b>" + $d_speed + "</b> px d_pos : <b>" + $d_pos + "</b> px");
    
    $("#playarrow").css("top",$arrow_pos); 
    
    if($idle) {
        var scrollll = $arrow_pos - $scrollidlefix_height;
        $("#wrapperbody").scrollTop(scrollll);
        $("#wrapperbody2").scrollTop(scrollll); // + $scrollidlefix_height
//        $("#wrapperbody2").scrollTop($arrow_pos);
    }
    
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













