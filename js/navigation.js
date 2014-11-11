jQuery(document).ready(function(){
	var navHeight;
	
	$(".navigation-toggle").append("<div class='bar one'></div><div class='bar two'></div><div class='bar three'></div>"); // Adds 3 empty DIVs for creating the hamburger icon 

	// When navigation is to be open
	function navHeightMeasure() {
		$(".widget__navigation").removeClass("ready");
		navHeight = $(".navigation-body").height();  // Measure navigation height
		if (navHeight == 0) {
			navHeight = "9999px";
		}
		$(".widget__navigation").addClass("ready");
	}

	// When navigation is to be closed
	function navClosed() {
		$(".widget__navigation").removeClass("open");
		$( ".navigation-body" ).css('max-height','');
		$(this).one("click", navOpen); // Attach navOpen to be the next called handler
	}

	// When navigation is to be open
	function navOpen() {
		$(".widget__navigation").addClass("open");
		$( ".navigation-body" ).css('max-height',navHeight);
		$(this).one("click", navClosed); // Attach navClosed to be the next called handler
	}

	
		// Measure the nav height
		setTimeout(function() {
	    	navHeightMeasure();
		}, 1500);
	
	
	navHeightMeasure();



	// Attach navOpen and navClose handlers to the toggle button
	$(".navigation-toggle").one("click", navOpen);

	$( window ).resize(function() {
		navHeightMeasure();
	});

});