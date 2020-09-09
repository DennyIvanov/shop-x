
$(function () {

	/* Fixed Header */
	let header = $("#header");
	let nav = $("#nav");
	let navH = nav.innerHeight();
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav_toggle = $("#nav_toggle");

	checkScroll(scrollPos, navH);

	$(window).on("scroll", function () {
		navH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, navH);
	});

	function checkScroll(scrollPos, navH) {
		if (scrollPos >= navH && scrollPos >= headerH) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	};


	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута data-scroll
		let blockId = $(this).data('scroll');
		// находим высоту, на которой расположен блок
		let blockOffset = $(blockId).offset().top - 63;

		nav.removeClass("active");
		nav_toggle.removeClass("active");

		$("#nav a").removeClass("active");
		$(this).addClass("active");

		// анимируем переход к блоку, время: 500 мс
		$("html, body").animate({ scrollTop: blockOffset }, 500);
	});




	/* Menu nav toggle */
	nav_toggle.on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		nav.toggleClass("active");
	});
});