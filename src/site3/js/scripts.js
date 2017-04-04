/* FUNCIONES TEMPORALES PARA LA MAQUETA */
$( document ).ready(function() {
	// VARIABLES
	var docHeight = $(window).outerHeight(),
	docWidth = $(window).outerWidth(),
	lastScrollTop = 0;

	// RESET MENU
	$('.navbar-default .navbar-collapse').css('height',docHeight);

	// TABS NAVIGATION
	$('.main-navigation ul > li').click(function() {
		$('.main-navigation ul > li a').removeClass('active');
		$(this).find('> a').addClass('active');
		$('.tabs-wrapper').attr('class',"tabs-wrapper transform-"+$(this).index()+"");
	});

	// MENU LATERAL
	$("button.navbar-toggle, .navbar-right-side .profile .actions a.icon.icon-private").click(function() {
		$('body').toggleClass("open");

		if($('body').hasClass('open')) {
			$('*').removeClass("slide");
		}
	});

	// NIVELES MENU LATERAL
	$(".navbar-default .navbar-collapse .profile + ul li a[href='#']").click(function() {

		$(".navbar-default .navbar-collapse").animate({ scrollTop: 0 }, "fast");

		if(!$(this).hasClass('back')) {
			$(this).next('ul').addClass('slide');
		} else {
			$(this).closest('ul').removeClass('slide');
		}
	});

	// NIVELES CUSTOM NAV
	$("nav.nav.custom-nav li a").click(function() {
		var currentCol = $(this).closest('[class*="col-"]'),
		maxHeight  = -1;

		$('nav.nav.custom-nav [class*="col-"]').each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
			$(this).height(maxHeight);
		});

		if(!$(this).parent('li').hasClass('active')) {
			currentCol.nextAll().slideUp('slow');
			currentCol.nextAll().find('li').removeClass('active');
			currentCol.find('li').removeClass('active');
			currentCol.next().slideDown('slow');

			currentCol.next().find('li a').each(function(i) {
				$(this).delay(i * 50).animate({
					opacity: 1
				});
			});

			$(this).parent('li').addClass('active');
		}
	});

	// BUSCADOR
	$("a.icon.icon-lupa-search-person").click(function() {
		$('body').toggleClass("search");
		$('.navbar-default .navbar-header form#search-main textarea').focus();
	});

	// FILTRO TIPO DE VISTA
	$(".filter i").click(function() {
		$(this).closest('.filter').find('i').removeClass('active');

		if($(this).hasClass('icon-th-large')) {
			$(this).addClass('active');
			$(this).closest('.row').next().find('ul.list').addClass('grid');
			$(this).closest('.row').next().find('ul.list').removeClass('simple');
		} else if($(this).hasClass('icon-reorder')) {
			$(this).addClass('active');
			$(this).closest('.row').next().find('ul.list').removeClass('grid');
			$(this).closest('.row').next().find('ul.list').addClass('simple');
		} else {
			$(this).addClass('active');
			$(this).closest('.row').next().find('ul.list').removeClass('grid simple');
		}
	});

	// CERRAR RESULTADOS DE BÚSQUEDA
	$(".results i").click(function() {
		$(this).toggleClass('icon-rotate');
		$(this).closest('.row').next().find('ul.list.people').fadeToggle();
	});

	// DESACTIVAR ACORDEONES EN DESKTOP
	$('a[data-toggle="collapse"]').click(function(e){
		if ($(window).width() >= 992) {
			e.stopPropagation();
			e.preventDefault();
		}
	});

	// FOCUS DE FORMULARIOS
	$('.form-control').click(function() {
		$(this).closest('div.form-group').addClass('focused');
		$('.form-control').blur(function() {
			if (!$(this).closest('div.form-group').find('input').val() || $(this).parents().hasClass('formulario')) {
				$(this).closest('div.form-group').removeClass('focused');
			}
		});
		$('select.form-control').blur(function() {
			if ($(this).closest('div.form-group').find('select').val()=="0" || $(this).parents().hasClass('formulario')) {
				$(this).closest('div.form-group').removeClass('focused');
			}
		});
	});

	// FOCUS DE CHECKS & RADIO BUTTONS
	$('input[type="checkbox"]').click(function() {
		$(this).closest('label').toggleClass('checked');
	});

	// LOGIN / LOGOUT FALSO
	$('.login form, .profile .actions a.icon.icon-private, .login-trigger').click(function() {
		$('.login form, .main-navigation > ul > li + li, .login-trigger, .login + ul.nav.navbar-nav.navbar-right, .navbar-header .promoted-links').toggle();
		$('.navbar-header.top-bar').toggleClass('dark');
	});

	// SLIDER PRINCIPAL
	function sliderPrincipal() {
		var slider = $('#full-width-slider').royalSlider({
			arrows: false,
			arrowsNav: false,
			slidesSpacing: 3,
			loop: true,
			autoHeight: true,
			autoScaleSlider:false,
			imageScaleMode:'none',
			imageAlignCenter: false,
			navigateByClick: false,
			/*autoPlay: {
				enabled: true,
				pauseOnHover: true
			}*/
		}).data('royalSlider');

		// Parar vídeos al pasar de diapositiva
		slider.ev.on('rsAfterSlideChange', function(event) {
		    $("#full-width-slider video").each(function(index, video) {
		    	video.pause();
		    })
		});

		$('#content-slider-1').royalSlider({
		    autoHeight: true,
		    arrows: false,
		    slidesSpacing: 3,
		    fadeinLoadedSlide: false,
		    imageScaleMode: 'none',
		    imageAlignCenter:false,
		    usePreloader: false,
		    autoScaleSlider:true,
		  });
	}

	// ASIDE NAV
	function asideNavToggle() {
		var asideNav = $('body.detail aside > nav');

		if($(window).width() < 768) {
			$(asideNav).find('ul li:not(.active), ul li ul').slideUp(0);

			$(asideNav).find('ul li').click(function() {
				if($(this).hasClass('open')) {
					$(this).removeClass('open');
					$(asideNav).find('ul li:not(.active), ul li ul').slideUp();
				} else {
					$(this).addClass('open');
					$(asideNav).find('ul li:not(.active), ul li ul').slideDown();
				}
			});
		} else {
			$(asideNav).find('ul li:not(.active), ul li ul').slideDown(0);
		}
	}

	// CARGA DE SLIDERS
	function sliderPromo() {
		$('#full-width-slider-promo').royalSlider({
			arrows: false,
			slidesSpacing: 3,
			loop: true,
			autoHeight: true,
			autoScaleSlider:false,
			imageScaleMode:'none',
			imageAlignCenter: false,
			navigateByClick: false
		});
	}

	function sliderNews() {
		var newsSliderConfig = {
			addActiveClass: true,
			arrowsNav: false,
			controlNavigation: 'none',
			autoScaleSlider: true,
			autoScaleSliderHeight: 340,
			loop: false,
			fadeinLoadedSlide: false,
			globalCaption: true,
			keyboardNavEnabled: true,
			globalCaptionInside: false,
			visibleNearby: {
				enabled: true,
				centerArea: ($(window).width() <= 640) ? 0.9 : 0.5,
				center: false,
				breakpoint: 250,
				breakpointCenterArea: 0.64
			}
		};

		var sliders = [
		$('#news-slider-1').royalSlider(newsSliderConfig),
		$('#news-slider-2').royalSlider(newsSliderConfig)
		];

		$(".news .nav-tabs li").on("click", function(){
			setTimeout(function(){
				sliders.forEach(function(value) {
					value.data('royalSlider').updateSliderSize();
				})
			}, 1);
		});

	}
	function sliderFooter() {
		$('#full-width-slider-footer').royalSlider({
			arrows: false,
			loop: true,
			autoScaleSlider: true,
			navigateByClick: false,
			autoHeight: true
		});
	}

	// EXTENSIÓN DEL FOOTER
	function footerExtension() {
		var footerContent = $('footer#carousel-footer'),
			footerPlace   = $('.footer-wrapper');
			footerContent.clone().appendTo(footerPlace);
	}

	// DIRECCION DE SCROLL
	function scrollDirection(wrapper) {
		var st = wrapper.scrollTop();

		if (st >= lastScrollTop){
			$('body').removeClass('scroll-up');
			$('body').addClass('scroll-down');
			lastScrollTop = st;
		}
		else if(st <= (lastScrollTop - 200)) {
			$('body').addClass('scroll-up');
			$('body').removeClass('scroll-down');
			lastScrollTop = st;
		}
		else if (st == 0) {
			$('body').removeClass('scroll-down scroll-up');
			lastScrollTop = st;
		}
	}

	// GO TOP LINK
	function goTopLink(wrapper) {
		var st = wrapper.scrollTop();

		if (st >= 500){
			$('.top-link-block').addClass('active');
		} else {
			$('.top-link-block').removeClass('active');
		}

		$('.top-link-block').click(function() {
			wrapper.scrollTop(0);
		});
	}

	// CONTROLA LOS CAMBIOS DE VIEWPORT
	$(window).resize(function() {
		var docHeight = $(window).outerHeight(),
		docWidth = $(window).outerWidth();
	});

	// CONTROLA LA DIRECCIÓN DEL SCROLL DEL BODY
	$(window).scroll(function(){
		scrollDirection($(this));
		goTopLink($(this));
	});

	// CONTROLA LA DIRECCIÓN DEL SCROLL EN LA VISTA TABS
	$('.tab-content').scroll(function(){
		scrollDirection($(this));
		goTopLink($(this));
	});

	$(window).load(function() {
		footerExtension();

		if($(window).width() < 992) {
			sliderFooter();
		}

		if($(window).width() <= 768) {
			sliderNews();
		}

		if($(window).width() < 768) {
			sliderPromo();
		}

		asideNavToggle();
		sliderPrincipal();
	});
});
