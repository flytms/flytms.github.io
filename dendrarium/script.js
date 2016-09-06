        function newBackground(num_card) {    
            $('.back_layer').addClass("movedown");
            
//            setTimeout(function(){ 
//                $('.back_layer').addClass("imagechange");
//            }, 1500);
            
            setTimeout(function(){ 
                $('.back_layer.layer4').css('background-image', 'url(./images/scene' + num_card + '/4.png)');
                $('.back_layer.layer3').css('background-image', 'url(./images/scene' + num_card + '/3.png)');
                $('.back_layer.layer2').css('background-image', 'url(./images/scene' + num_card + '/2.png)');
                $('.back_layer.layer1').css('background-image', 'url(./images/scene' + num_card + '/1.png)');
            }, 1000);
//            setTimeout(function(){ 
//                $('#backplane').removeClass("imagechangeblur");
//            }, 2350);
            setTimeout(function(){ 
            $('.back_layer').removeClass("movedown");
            $('.back_layer').removeClass("imagechange");
//            }, 4500);
            }, 2000);
        }


        $(document).ready(function () {

            $('#backplanebackground').toggleClass('animated');


            $(document).mousemove(function (event) {

                cx = Math.ceil($(window).width() / 2.0);
                cy = Math.ceil($(window).height() / 2.0);
                dx = event.pageX - cx;
                dy = event.pageY - cy;

                console.log(cx, cy, dx, dy);

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
                //CHANGED
                //if(($windowheight < 661 || $windowwidth < 1191) && $leftside == true){
                if (($windowheight < 61 || $windowwidth < 91) && $leftside == true) {
                    $("#postoptions").velocity({
                        opacity: 0
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $("#logobottom").velocity({
                        opacity: 0
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $('#postoptions').delay(700).queue(function (next) {
                        $(this).css({
                            'pointer-events': 'none',
                            'display': 'none'
                        });
                        next();
                    });
                    $('#logobottom').delay(700).queue(function (next) {
                        $(this).css({
                            'pointer-events': 'none',
                            'display': 'none'
                        });
                        next();
                    });

                    $("#minimaloptions").velocity({
                        opacity: 1
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $("#minimaloptions").css({
                        'pointer-events': 'all',
                        'display': 'inline-block'
                    });
                    $leftside = false;
                }
                //CHANGED
                //if(($windowheight > 661 && $windowwidth > 1191) && $leftside == false){
                if (($windowheight > 61 && $windowwidth > 91) && $leftside == false) {
                    $("#postoptions").velocity({
                        opacity: 1
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $("#logobottom").velocity({
                        opacity: 1
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $("#postoptions").css({
                        'pointer-events': 'all',
                        'display': 'inline-block'
                    });
                    $('#logobottom').css({
                        'pointer-events': 'all',
                        'display': 'inline-block'
                    });
                    $("#minimaloptions").velocity({
                        opacity: 0
                    }, {
                        queue: false,
                        duration: 700,
                        easing: 'ease'
                    });
                    $('#minimaloptions').delay(700).queue(function (next) {
                        $(this).css({
                            'pointer-events': 'none',
                            'display': 'none'
                        });
                        next();
                    });
                    $leftside = true;
                }
                
                $basicwidth = $windowwidth * 0.7;
                $("#basiclevel").css("width", $basicwidth);
                $basicheight = $basicwidth * 0.563;
                $("#basiclevel").css("height", $basicheight);
                
                $("#styling3dtransition").css("margin-top", $basicheight / -2);
                $("#styling3dtransition").css("margin-left", $basicwidth / -2);
            });


        });

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - scripts/particles.js config loaded');
});