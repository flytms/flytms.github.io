

$set = 1;
$changeinprogress = 1;
$current_card = -1;
$help_hover = 2;
$scroll_revival_settimeout = 0;
function newBackground(num_card) { 
    if (num_card == 0) {$changeinprogress = 0;}
    if ( $changeinprogress == 0 && $current_card != num_card) {
        $changeinprogress = 1;
        
        if (num_card == 0) {
            $('#wrapperbody').css('opacity','1');
            $('#wrapperbody2').css('opacity','1');
            $("#loadwheel").fadeOut(1200, function() { $("#loadwheel").remove(); });
        }
        
        if (num_card > 0) {
            
            wrH = $wrapper_height;
            cH = $card_height;
            cP = $scrollidlefix_height + ($card_height + $empty_height)*(num_card - 1);
            sT = $('#wrapperbody').scrollTop();
            bH = $("#basiclevel").height();
            NN = $scrollidlefix_height;
            eH = $empty_height;

                if ( (cP < (sT + (wrH - bH)/2 - cH +(cH/6)) ) || (cP > (sT + wrH - (wrH - bH)/2 -(cH/6)) ) ) {
                    $changeinprogress = 0;
                    return;
                }        
                if ( (cP < (sT + (wrH - bH)/2 -(cH/8)) ) || (cP > (sT + wrH - (wrH - bH)/2 - cH +(cH/8)) ) ) { 
                    $('#wrapperbody').scrollTo($(".card"+num_card),700, {offset: function() { return {top:$cardscr_offs, left:0}; }});
                }

            $('.out-dend-txt-hidescroll').removeClass('recover');
            clearTimeout($scroll_revival_settimeout);
            $('.help_scroll').css('opacity','0');

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
            if ($help_hover > 1 ){
                $('#wrapperbody3 .card'+$current_card+'.card_help .help_hover').remove();
                $help_hover -= 1;
            } else {
                $('#wrapperbody3').remove();
                $help_hover -= 1;
            }
            
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
                if ($finish && $finish_touch){
                    $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
                    $('.card'+$current_card+'.card_top .cardimage').css('margin-left','300%');
                    $finish_touch = false;
                }        
                $changeinprogress = 0;
            },4200);
            $scroll_revival_settimeout = setTimeout(function(){ 
                $('.help_scroll').css('opacity','1');
                $('#wrapperbody3').css('opacity','1');
            },8000);
        },1350);
    } else if ( $changeinprogress == 0 && $current_card == num_card) {
        $('.card'+$current_card+'.card_top .cardimage').addClass("faded");
        $('.card'+$current_card+'.card_top .cardimage').css('margin-left','300%');
    }
}  

var myTracks = [
    {starttime: 0, position: 0 }, // first track
    {starttime: 111000, position: 0 },
    {starttime: 196000, position: 0 },
    {starttime: 303000, position: 0 },
    {starttime: 507000, position: 0 },
    {starttime: 668000, position: 0 },
    {starttime: 750000, position: 0 },
    {starttime: 831000, position: 0 },
    {starttime: 914000, position: 0 },
    {starttime: 1088000, position: 0 }, //track 10 
    {starttime: 1164000, position: 0 },
    {starttime: 1303000, position: 0 },
    {starttime: 1331000, position: 0 },
    {starttime: 1412000, position: 0 },
    {starttime: 1479000, position: 0 },
    {starttime: 1598000, position: 0 },
    {starttime: 1703000, position: 0 },
    {starttime: 1735000, position: 0 },
    {starttime: 1760000, position: 0 },
    {starttime: 1846000, position: 0 }, //track 20
    {starttime: 1945000, position: 0 },
    {starttime: 2039000, position: 0 },
    {starttime: 2201000, position: 0 },
    {starttime: 2297000, position: 0 },
    {starttime: 2412000, position: 0 },
    {starttime: 2509000, position: 0 },
    {starttime: 2566000, position: 0 },
    {starttime: 2596000, position: 0 },
    {starttime: 2695000, position: 0 },
    {starttime: 2803000, position: 0 }, // track 30
    {starttime: 2940000, position: 0 },
    {starttime: 3137000, position: 0 },
    {starttime: 3260000, position: 0 },
    {starttime: 3369000, position: 0 },
    {starttime: 0, position: 0 } //end
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
$finish = false;
$finish_touch = true;
$idle_timeout_fade = 0;

$idle_move_x = 0;
$idle_move_y = 0;
$idle_move_x_step = 0;
$idle_move_y_step = 0;
$speed_percent = 0;
$idle_start8 = false;
$ccx = 0;
$ccy = 0;
$idle_degree = 0;
$idle_degree_circle = 0;

//$dend_idlescroll_pervention = false;

var currentMousePos = { x: -1, y: -1 };
$(document).ready(function () {
    
    $speed_percent = $('#basiclevel').height() / 533;
    $default_d_speed = 1 * $speed_percent;
    $default_d_speed_save = $default_d_speed;
    $max_d_speed = 36 * $speed_percent;
    $d_breaks = 0.09 * $speed_percent;
    
    $empty_height = $("#wrapperbody").width() * 0.3;
    $(".emptycardspase").css("height",$empty_height);
    $empty_height = $(".emptycardspase").height();
     
    $wrapper_height = $("#wrapperbody").height();
    $card_height = $("#wrapperbody").width() * 0.200343;
    $cardscr_offs = ($wrapper_height / -2) + ($card_height / 2);
    $scrollidlefix_height = $(".description").height() + parseInt($(".description").css("padding-top")) + parseInt($(".description").css("padding-bottom"));

    
    $('#backplanebackground').toggleClass('animated');
    
    
    var iframeElement   = document.querySelector('iframe');
    var widget         = SC.Widget(iframeElement);
    widget.bind(SC.Widget.Events.READY, function() {
        if ($firstplay) { widget.play();}
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
            $finish = false;
            $finish_touch = true;
            $("#playarrow").css("opacity","1");
            $default_d_speed = $default_d_speed_save;
        });
    });
    
    
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
        widget.getPosition(function(pos) {
            if(!$firstplay){
                if (myTracks[$current_track].starttime < pos && myTracks[$current_track+1].starttime > pos && !$window_resized){
                    arrow_pos_old = $arrow_pos;
                    $arrow_pos = myTracks[$current_track].position + $arrow_step * (pos - myTracks[$current_track].starttime);
                    if ($arrow_pos - arrow_pos_old > 1000) {
                        $no_rewind = false;
                    }
                } else {
                    i = myTracks.length - 1;
                    while (i >= 0 && pos < myTracks[i].starttime) {
                        i = i - 1;
                    }
                    percent_new_track_left = (myTracks[i+1].starttime - pos)/(myTracks[i+1].starttime - myTracks[i].starttime);
                    $arrow_pos = myTracks[i].position + (myTracks[i+1].position - myTracks[i].position)*percent_new_track_left;
                    $arrow_step = ((myTracks[i+1].position - myTracks[i].position)*percent_new_track_left) / (myTracks[i+1].starttime - pos);
                    
                    if($idle) { 
                        newBackground(i+1);
                    }
                    if (($idle && i == 1) || !$idle) {
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
        $idle = false;
        $finish = true;
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
                $idle_start8 = false;
                $('.card.card_top').css('pointer-events','all');
                clearTimeout($idle_timeout_fade);
                $('#wrapperbody').css('opacity','1');
                $('#wrapperbody2').css('opacity','1');
                currentMousePos.x = event.pageX;
                currentMousePos.y = event.pageY;
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
        
        $speed_percent = $('#basiclevel').height() / 533;
        $default_d_speed = 1 * $speed_percent;
        $default_d_speed_save = $default_d_speed;
        $max_d_speed = 36 * $speed_percent;
        $d_breaks = 0.09 * $speed_percent;
        
        $empty_height = $("#wrapperbody").width() * 0.3;
        $(".emptycardspase").css("height",$empty_height);
        $empty_height = $(".emptycardspase").height();
        $wrapper_height = $("#wrapperbody").height();
        $card_height = $('.card1.card.card_bottom').height();
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
        
//        if (!$dend_idlescroll_pervention) {
            $d_speed -= $scrollchange/80;
//        }
        
        $scrollbefore = $scrolltop;    
    });
    
    
    $(document).idle({
      onIdle: function(){
        if (!$finish && !$idle) {
            $('.card.card_top').css('pointer-events','none');
            $('#wrapperbody').css('opacity','0');
            $('#wrapperbody2').css('opacity','0');
            $('#wrapperbody3').css('opacity','0');
            $idle_timeout_fade = setTimeout(function(){ 
                $('#wrapperbody').css('opacity','1');
                $('#wrapperbody2').css('opacity','1');
                $('#wrapperbody3').css('opacity','1');
                $idle = true;
            }, 2100);
            $idle_move_x = currentMousePos.x;
            $idle_move_y = currentMousePos.y;
            
            $ccx = Math.ceil($(window).width() / 2.0);
            $ccy = Math.ceil($(window).height() / 2.0);
            var xx = Math.abs($idle_move_x - $ccx);
            var yy = Math.abs($idle_move_y - $ccy);
            if (xx < yy ) {
                $idle_move_y_step = 2 * $speed_percent;
                $idle_move_x_step = (xx / yy) * $idle_move_y_step;
            } else {
                $idle_move_x_step = 2 * $speed_percent;
                $idle_move_y_step = (yy / xx) * $idle_move_x_step;
            }
            $idle_degree = Math.PI / 2;
            $idle_degree_circle = 0; 
            
//            $dend_idlescroll_pervention = true;
//            setTimeout(function(){ 
//                $dend_idlescroll_pervention = false;
//            }, 500);
        }
      },
      idle: 12000
    });

    var interval_scroll_help = setInterval(function() {
        var $first_scrolled = $('#wrapperbody').scrollTop();
        if ($first_scrolled > ($scrollidlefix_height + $empty_height)){
//            $(".help_scroll").fadeOut(1200, function() { $(".help_scroll").remove(); });
            $('.help_scroll').css('opacity','0');
            setTimeout(function(){ 
                $(".help_scroll").remove();
                clearInterval(interval_scroll_help);
            },3000);     
        }
    }, 2000);
    
    var interval_hover_help = setInterval(function() {
        var $first_scrolled = $('#wrapperbody').scrollTop();
        if ($first_scrolled > (($scrollidlefix_height + $empty_height)*4)){
            $("#wrapperbody3").fadeOut(1200, function() { $("#wrapperbody3").remove(); });
            clearInterval(interval_hover_help);
        }
        if($help_hover == 0) {
            clearInterval(interval_hover_help);
        }
    }, 2000);
    
    var bLazy = new Blazy({ 
        offset: 3000,
        container: '.blazyscroll'
    });
    
    function getBrowserInfo()
    {
        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1]))
        {
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome')
        {
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    }

    var browserInfo = getBrowserInfo();
    browserInfo = browserInfo.split(" ");

    $(function () {
//        alert(browserInfo);
        if(browserInfo[0] == 'Firefox') {
            alert("Unfortunately Soundcloud widget doesn't work in Firefox browser. Use Chrome or Opera for listening this mix.");
        }
//        if(browserInfo[0] == 'Chrome' && browserInfo[1] < 22) {
//            alert("Chrome");
//        }
        if(browserInfo[0] == 'IE') {
            alert("Use Chrome or Opera for better experience.");
        }
//        if(browserInfo[0] == 'Safari' && browserInfo[1] < 11) {
//            alert("Safari");
//        }
//        if(browserInfo[0] == 'Opera' && browserInfo[1] < 14) {
//            alert("Safari");
//        }
    });

  
});

function repeatOften() {
    if ($d_speed > $max_d_speed) {
        $d_speed = $max_d_speed;
    }
    if ($d_speed < (0 - $max_d_speed)) {
        $d_speed = 0 - $max_d_speed;
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
    
    $("#playarrow").css("top",$arrow_pos); 
    
    if($idle) {
        var scrollll = $arrow_pos - $scrollidlefix_height;
        $dend_idlescroll_pervention = true;
        $("#wrapperbody").scrollTop(scrollll);
        $("#wrapperbody2").scrollTop(scrollll);
        setTimeout(function(){ 
            $dend_idlescroll_pervention = false;
        }, 500);
        
        if ($changeinprogress == 0){
            
            var ddx = 0;
            var ddy = 0;
            if (!$idle_start8) {
                if ($idle_move_x < $ccx + (100*$speed_percent)){
                    $idle_move_x += $idle_move_x_step;
                    if ($idle_move_x >= $ccx){$idle_move_x = $ccx + (100*$speed_percent);}
                }
                if ($idle_move_x > $ccx + (100*$speed_percent)){
                    $idle_move_x -= $idle_move_x_step;
                    if ($idle_move_x <= $ccx){$idle_move_x = $ccx + (100*$speed_percent);}
                }
                if ($idle_move_y < $ccy){
                    $idle_move_y += $idle_move_y_step;
                    if ($idle_move_y >= $ccy){$idle_move_y = $ccy;}
                }
                if ($idle_move_y > $ccy){
                    $idle_move_y -= $idle_move_y_step;
                    if ($idle_move_y <= $ccy){$idle_move_y = $ccy;}
                }
                if ($idle_move_y == $ccy && $idle_move_x == $ccx + (100*$speed_percent)){
                    $idle_start8 = true;
                }
                var ddx = $idle_move_x - $ccx;
                var ddy = $idle_move_y - $ccy;
            } else {
                var ddx = (Math.cos($idle_degree)) * 400 * $speed_percent + Math.cos($idle_degree_circle)*(100*$speed_percent);
                var ddy = (Math.sin(2*$idle_degree) / 2) * 400 * $speed_percent + Math.sin($idle_degree_circle)*(100*$speed_percent);
                $idle_degree += 0.003*$speed_percent;
                $idle_degree_circle += 0.004*$speed_percent;
            }

            var tiltxx = (ddy / $ccy);
            var tiltyy = -(ddx / $ccx);
            var radiuss = Math.sqrt(Math.pow(tiltxx, 2) + Math.pow(tiltyy, 2));
            var degreee = (radiuss * 20);

            $('#basiclevel').css('-webkit-transform', 'rotate3d(' + tiltxx + ', ' + tiltyy + ', 0, ' + degreee + 'deg)');
            $('#basiclevel').css('transform', 'rotate3d(' + tiltxx + ', ' + tiltyy + ', 0, ' + degreee + 'deg)');    
        }
    }
    
    requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);

setInterval(function(){
    $d_to_end = $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt span").height() - $(".out-dend-txt-hidescroll.top-txt .dendrarium-txt").scrollTop();
    if($d_to_end < 3000) {
        $('.dendrarium-txt span').append("DENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUMDENDRARIUM");
    }
}, 1000);












