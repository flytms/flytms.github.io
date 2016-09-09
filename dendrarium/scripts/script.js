$set = 1;
$changeinprogress = 0;
$current_card = 1;
function newBackground(num_card) {    
    if ( $changeinprogress == 0 && $current_card != num_card) {
        $changeinprogress = 1;
        $current_card = num_card;
        $('.back_layer').addClass("movedown");
        $('#particles-js').addClass("onimagechange");
        setTimeout(function(){ 
            $('.back_layer.layer1').css('-webkit-filter','blur(3px)');
            $('.back_layer.layer2').css('-webkit-filter','blur(3px)');
            $('.back_layer.layer3').css('-webkit-filter','blur(3px)');
            }, 0);
        if ($set == 1) {
            $('.back_layer.layer4.set2').css('background-image', 'url(./images/scene' + num_card + '/4.png)');
            $('.back_layer.layer3.set2').css('background-image', 'url(./images/scene' + num_card + '/3.png)');
            $('.back_layer.layer2.set2').css('background-image', 'url(./images/scene' + num_card + '/2.png)');
            $('.back_layer.layer1.set2').css('background-image', 'url(./images/scene' + num_card + '/1.png)');
            setTimeout(function(){ 
                $('.back_layer.set2').css('opacity', '1');
                $('.back_layer.set1').css('opacity', '0');
            }, 200);
            $set = 2;
        } else {
            $('.back_layer.layer4.set1').css('background-image', 'url(./images/scene' + num_card + '/4.png)');
            $('.back_layer.layer3.set1').css('background-image', 'url(./images/scene' + num_card + '/3.png)');
            $('.back_layer.layer2.set1').css('background-image', 'url(./images/scene' + num_card + '/2.png)');
            $('.back_layer.layer1.set1').css('background-image', 'url(./images/scene' + num_card + '/1.png)');
            setTimeout(function(){ 
                $('.back_layer.set1').css('opacity', '1');
                $('.back_layer.set2').css('opacity', '0');
            }, 200);
            $set = 1;
        }


        setTimeout(function(){ 
            $('.back_layer').removeClass("movedown");
            $('.back_layer').css('-webkit-filter','');
        }, 2100);
        setTimeout(function(){ 
            $('#particles-js').removeClass("onimagechange");
        },4000);
        setTimeout(function(){ 
            $changeinprogress = 0;
        },4200);
    }
}


$(document).ready(function () {

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

        $basicwidth = $windowwidth * 0.7;
        $("#basiclevel").css("width", $basicwidth);
        $basicheight = $basicwidth * 0.563;
        $("#basiclevel").css("height", $basicheight);

        $("#styling3dtransition").css("margin-top", $basicheight / -2);
        $("#styling3dtransition").css("margin-left", $basicwidth / -2);
    });

    //var subCatContainer = $(".scroll-container");
    $(".scroll-container").scroll(function() {
        $(".sub-scroll-container").scrollTop($(this).scrollTop());
    });

});




