/*************************************************************
 * SCROLLING FUNCTIONS
 *************************************************************/

/******************************************
 * CHANGE PAGE
 * Scrolls to the position of a given section
 ********************************************/
function changePage(pageName) {
	var position = $(pageName).offset().top;
	$('html, body').animate({
		scrollTop: position
	}, 300, function () {
		window.location.hash = pageName;
	});
}

/***********************************************
 * GET PAGE
 * Gets the name of the section and passes it to
 * changePage()
 *************************************************/
$(document).ready(function getPage() {
	// for the about page
    $('.about').click(function () {
        $('article').toggleClass("visible");
    });
    
    $('#home a, nav a').click(function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var pageName = this.hash;
            changePage(pageName);
		}
	});
});

/**********************************************************
 *
 * Attaches the nav bar to the top when you scroll past it
 ***********************************************************/
$(window).scroll(function () {
	if ($(document).scrollTop() >= $("#hours").offset().top) {
		$('nav').addClass("fixed");
        // also put away the "about" page
        $('article').removeClass("visible");
	} else {
		$('nav').removeClass("fixed");
	}
});
