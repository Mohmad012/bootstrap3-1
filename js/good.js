/*global $, jQuery, alert */
$(document).ready(function () {

	"use strict";

	// Nice Scroll
	$("html").niceScroll();

	$('.carousel').carousel({

	  	interval: 6000

	});

	// Show Color Option Div When Click On The Gear

	$('.gear-check').click(function () {

		"use strict";

		$('.color-option').fadeToggle();

	}); 

	// Change NavBar Color On Click

	var colorNav = $('.color-option .NavBar li');

	colorNav
		.eq(0).css("backgroundColor", "#101010").end()
		.eq(1).css("backgroundColor", "#6d1a1a").end()
		.eq(2).css("backgroundColor", "#046149").end()
		.eq(3).css("backgroundColor", "#5a3008");

	colorNav.click(function () {

		"use strict";

		$("link[href*='navbar']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});


	// Change Title Color On Click

	var colorTit = $('.color-option .Title li');

	colorTit
		.eq(0).css("backgroundColor", "#888").end()
		.eq(1).css("backgroundColor", "#ad9000").end()
		.eq(2).css("backgroundColor", "#9500a7").end()
		.eq(3).css("backgroundColor", "#208e0c");

	colorTit.click(function () {	

		"use strict";

		$("link[href*='about']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});

	// Change Featurescolor Color On Click

	var colorFeat = $('.color-option .Featurescolor li');

	colorFeat
		.eq(0).css("backgroundColor", "#d00000").end()
		.eq(1).css("backgroundColor", "#0043ffde").end()
		.eq(2).css("backgroundColor", "#00da11de").end()
		.eq(3).css("backgroundColor", "#ff0099de");

	colorFeat.click(function () {

		"use strict";

		$("link[href*='feature']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});

	// Change Clients Color On Click

	var colorClien = $('.color-option .Clientscolor li');

	colorClien
		.eq(0).css("backgroundColor", "#ff5757").end()
		.eq(1).css("backgroundColor", "#5764ff").end()
		.eq(2).css("backgroundColor", "#2ad200").end()
		.eq(3).css("backgroundColor", "#ff57d3");

	colorClien.click(function () {

		"use strict";

		$("link[href*='clients']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});

	// Change Color for Our Amazing Prices On Click

	var colorPri = $('.color-option .PricesColor li');

	colorPri
		.eq(0).css("backgroundColor", "#f00").end()
		.eq(1).css("backgroundColor", "#b400ff").end()
		.eq(2).css("backgroundColor", "#05dcc8").end()
		.eq(3).css("backgroundColor", "#12dc05");

	colorPri.click(function () {

		"use strict";

		$("link[href*='price']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});

	// Change Color for Sign Is Awesome On Click

	var colorSign = $('.color-option .Sign_Is li');

	colorSign
		.eq(0).css("backgroundColor", "#888").end()
		.eq(1).css("backgroundColor", "#f00").end()
		.eq(2).css("backgroundColor", "#d87800").end()
		.eq(3).css("backgroundColor", "#d8008c");

	colorSign.click(function () {

		"use strict";

		$("link[href*='sign']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});

	// Change Color for Our Skills On Click

	var colorSkill = $('.color-option .Skills_Is li');

	colorSkill
		.eq(0).css("backgroundColor", "#888").end()
		.eq(1).css("backgroundColor", "#f00").end()
		.eq(2).css("backgroundColor", "#8a83ff").end()
		.eq(3).css("backgroundColor", "#12bb0f");

	colorSkill.click(function () {

		"use strict";

		$("link[href*='skills']").attr("href",$(this).attr("data-value"));
		console.log($(this).attr("data-value"));
	});
	
	// Caching The Scroll Top Element

	var scrollButton = $('#scroll-top');

	$(window).on('scroll', function () {

		"use strict";

		if ($(this).scrollTop() >= 500) 
		{
			scrollButton.fadeIn();
		}
		else 
		{
			scrollButton.fadeOut();
		}
	});

	// Click On Button To Scroll Top

	scrollButton.click(function () {

		"use strict";

		$('html,body').animate({scrollTop : 0}, 600);
	});

});

// Loading Screen

$(window).on('load', function () {

		"use strict";

	// Loading Elements
		$('.color-option').hide();

		$(".loading-overlaping .sk-chase, .loading-overlaping .h1").fadeOut(2000, function () {

			"use strict";

			// Show The Scroll

			$("body").css("overflow","auto");

			$(this).parent().fadeOut(2000, function () {
				
				"use strict";

				$(this).remove();
		});
			
	});	

});

//$(window).on('load', function() { your code goes here });

