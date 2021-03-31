// JavaScript Document
//----------------------------------------------------------------jquery-----------------------------------------------------------------//
$(document).ready(function() {
	
	/**
	 * @JSDoc
	 * 
	 * changes the bg color to white when the app starts
	 * changes the start button to exit and vise versa
	 */
  	$('#on').click(function() {
		$bgid.css("animation-name", "startup");
		if($on.attr("rows", "1")){
			$b1.attr("src", "images/brightness_filled_1.png");
			$b2.attr("src", "images/brightness_empty_2.png");
			$b3.attr("src", "images/brightness_empty_3.png");
			$b4.attr("src", "images/brightness_empty_4.png");
		}
		let val = ($("#on").attr("value") === "START") ? "EXIT" : "START";
        $(this).attr('value', val);
		$on.attr("rows","0");
	});

	/**
	 * @JSDoc
	 * 
	 * @param {jQuery} fillButton the DOM element that was clicked
	 * @param {int} fillButtonNumber the id order number of the button that was clicked
	 * @param {string} newBGColor the color that the new bg should be
	 * 
	 * Changes the bg color
	 */
	function changeBG(fillButton, fillButtonNumber, newBGColor){
		$("#bgf").css("background-color", newBGColor);
		let imagePath = "images/brightness_";
		let count = 1;
		$("#levels input").each(function(){
			$(this).attr("src", `${imagePath}empty_${count}.png`);
			count ++;
		});
		fillButton.attr("src", `${imagePath}filled_${fillButtonNumber}.png`);
	}
	
	$("#b1").on("click", function() {
		changeBG($(this), 1, "rgb(255, 255, 255)")
	});
	$("#b2").on("click", function() {
		changeBG($(this), 2, "rgb(238, 238, 238)")
	});
	$("#b3").on("click", function() {
		changeBG($(this), 3, "rgb(221, 221, 221)")
	});
	$("#b4").on("click", function() {
		changeBG($(this), 4, "rgb(204, 204, 204)")
	});
	
	// hides the UI
	$("#bgf").on("dblclick", function(){
		$("#ui").show();
	});

	// hides the UI
	$("#hideUI").on("click", function(){
		$("#ui").hide();
	});

});

//------------------------------------------------------------------js------------------------------------------------------------------//

/**
 * @JSDoc
 * 
 * Toggles the current window to fullscreen
 */
function toggleFullScreen() {
	if (!document.fullscreenElement &&
		!document.mozFullScreenElement && 
		!document.webkitFullscreenElement) {
		if (document.documentElement.requestFullscreen){
	   		document.documentElement.requestFullscreen();
	 	} 
		else if	(document.documentElement.mozRequestFullScreen) {
	   			document.documentElement.mozRequestFullScreen();
	 	} 
		else if (document.documentElement.webkitRequestFullscreen) {
	   			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	 	}
		} 
	else {
		if (document.cancelFullScreen) {
		 	document.cancelFullScreen();
	  	} 
		else if (document.mozCancelFullScreen) {
		 		document.mozCancelFullScreen();
	  	} 
		else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
	  	}
	}
}
