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
	$('#home a, nav a').click(function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var pageName = this.hash;
			changePage(pageName);
		}
	});
})

/**********************************************************
 *
 * Attaches the nav bar to the top when you scroll past it
 ***********************************************************/
$(window).scroll(function () {
	var navbar = "nav, nav ul, nav img, nav h4";
	if ($(document).scrollTop() >= $("#about").offset().top) {
		$(navbar).addClass("fixed");
	} else {
		$(navbar).removeClass("fixed");
	}
});
