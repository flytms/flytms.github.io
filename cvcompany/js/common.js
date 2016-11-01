$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".main_mnu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
//        itemsDesktop : [1170,2], // 2 items between 1000px and 901px
        itemsDesktopSmall : [1170,3], // betweem 900px and 601px
        itemsTablet: [970,2], // 2 items between 600 and 480
        itemsMobile : [750,1] , // 1 item between 479 and 0
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
    
    if ($('.owl-carousel-top').length > 0) {

        mainOwlCarousel(); // does the carousel loading

        $(window).resize(function () {
            $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();

            mainOwlCarousel();
        });
    }

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
    
    //get URL parametrs
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
    };

    
    var dictionary = {
        'myname': {
            'ru': 'Банделюк Игнат',
            'en': 'Bandeliuk Ignat',
            'ua': 'Банделюк Iгнат',
        },
        'position': {
            'ru': 'Позиция',
            'en': 'Position',
            'ua': 'Позицiя',
        },
        'cv': {
            'ru': 'Резюме',
            'en': 'CV',
            'ua': 'Peзюме',
        },
        'phone': {
            'ru': 'Телефон ',
            'en': 'Phone ',
            'ua': 'Телефон ',
        },
        'mail': {
            'ru': 'Почта ',
            'en': 'Mail ',
            'ua': 'Пошта ',
        },
        'skype': {
            'ru': 'Скайп ',
            'en': 'Skype ',
            'ua': 'Скайп ',
        },
        'header_skills': {
            'ru': 'профессиональные навыки',
            'en': 'skills',
            'ua': 'професiйнi навички',
        },
        'header_education': {
            'ru': 'образование',
            'en': 'education',
            'ua': 'освiта',
        },
        'header_langs': {
            'ru': 'языки',
            'en': 'languages',
            'ua': 'мови',
        },
        'header_langs': {
            'ru': 'языки',
            'en': 'languages',
            'ua': 'мови',
        },
        'uni': {
            'ru': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Национальный Технический Университет Украины <span>«Киевский Политехнический Институт»</span>',
            'en': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  National Technical University of Ukraine  <br><span>«Kyiv Polytechnic Institute»</span>',
            'ua': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Нацiональний Технiчний Унiверситет України <span>«Київський Полiтехнiчний Iнститут»</span>',
        },
        'spec': {
            'ru': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<span>СПЕЦИАЛИСТ</span> по специальности ”СПЕЦИАЛИЗИРОВАННЫЕ КОМПЬЮТЕРНЫЕ СИСТЕМЫ” (ФПМ) ',
            'en': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;obtained<span>SPECIALIST’S ACADEMIC LEVEL</span> field of study “SPECIALIZED COMPUTER SYSTEMS” (Faculty of Applied Mathematics)',
            'ua': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<span>СПЕЦIАЛIСТ</span> за спецiальнiстю ”СПЕЦIАЛIЗОВАНI КОМП\'ЮТЕРНI СИСТЕМИ” (ФПМ) ',
        },
        'ended': {
            'ru': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;окончил в <span>2016</span>',
            'en': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;graduated in <span>2016</span>',
            'ua': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;закiнчив у <span>2016</span>',
        },
        'eng': {
            'ru': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  <span>Английский (Upper Intermediate)</span>',
            'en': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  <span>English (Upper Intermediate)</span>',
            'ua': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  <span>Англiйська (Upper Intermediate)</span>',
        },
        'rus': {
            'ru': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Русский',
            'en': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Russian',
            'ua': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Росiйська',
        },
        'ukr': {
            'ru': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Украинский',
            'en': '<i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Ukrainian',
            'ua': '<i class="fa fa-dot-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Українська',
        },
        'greet': {
            'ru': 'Здравствуйте, «<span class="company"></span>», это резюме составлено и отправлено по вашему адресу выпускником КПИ Банделюком Игнатом с целью найти работу в области web-программирования. Что ещё я могу о себе перечислить:',
            'en': 'Greetings, «<span class="company"></span>», this CV  has been made and sent to your address by KPI graduate Bandeliuk Ignat with the goal to find a job in web-developing field. Some of my other qualities:',
            'ua': 'Вітаю, «<span class="company"></span>», це резюме було складено i вiдправлено за вашою адресою випускником КПI Банделюком Iгнатом з метою знайти роботу в областi web-програмування. Що ще я можу про себе додати:',
        }, 
        'qualities': {
            'ru': '<li><a href="#">Сильная математическая база</a></li><li><a href="#">Понимание UI и UX</a></li><li><a href="#">Знание последних трендов</a></li><li><a href="#">Эстетическая восприимчивость</a></li><li><a href="#">Легко обучаем</a></li><li><a href="#">Желание развиваться</a></li><li><a href="#">Рациональный подход к задачам</a></li><li><a href="#">Неконфликтен</a></li><li><a href="#">Общителен</a></li><li><a href="#">Целеустремлён</a></li><li><a href="#">Проживаю в Киеве</a></li>',
            'en': '<li><a href="#">Strong mathematical base</a></li><li><a href="#">Understanding of UI & UX</a></li><li><a href="#">Knowledge of last trends</a></li><li><a href="#">Aesthetic sensitivity</a></li><li><a href="#">Easy learner</a></li><li><a href="#">Wish to improve</a></li><li><a href="#">Rational task solver</a></li><li><a href="#">Non-conflicting</a></li><li><a href="#">Sociable</a></li><li><a href="#">Purposeful</a></li><li><a href="#">Living in Kiyv</a></li>',
            'ua': '<li><a href="#">Сильна математична база</a></li><li><a href="#">Розумiння UI та UX</a></li><li><a href="#">Знання останнiх трендiв</a></li><li><a href="#">Естетична сприйнятливість</a></li><li><a href="#">Легко вивчаю нове</a></li><li><a href="#">Бажання розвиватися</a></li><li><a href="#">Рацiональный пiдхiд до задач</a></li><li><a href="#">Неконфліктний</a></li><li><a href="#">Товариський</a></li><li><a href="#">Цілеспрямований</a></li><li><a href="#">Живу у Києві</a></li>',
        }
    };
    var langs = ['ru', 'en', 'ua'];
//    var current_lang_index = 0;
//    var current_lang = langs[current_lang_index];
    var current_lang = getUrlParameter('lang');
    if (!(langs.indexOf(current_lang) >= 0)) {
        current_lang = "ru";
    }

    window.change_lang = function(lang) {
//        current_lang_index = ++current_lang_index % 3;
//        current_lang = langs[current_lang_index];
        $(".langchose").removeClass("chosen");
        $(".langchose."+lang).addClass("chosen");
        translate(lang);
        
    }

    function translate() {
        $("[data-translate]").each(function(){
            var key = $(this).data('translate');
            $(this).html(dictionary[key][current_lang] || "N/A");
        });
    }

    translate(current_lang);
    $("span.company").text(getUrlParameter('company'));
    $("span.position").text(getUrlParameter('position'));
});