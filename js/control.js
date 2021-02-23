// JavaScript Document
//----------------------------------------------------------------jquery-----------------------------------------------------------------//
$(document).ready(function() {
	var $on = $("#on");
	var $b1 = $("#b1");
	var $b2 = $("#b2");
	var $b3 = $("#b3");
	var $b4 = $("#b4");
	var $bgid = $("#bgid");
	var $bgf = $("#bgf");
	var $ui = $("#ui");
	var $hideUI = $("#hideUI");

	
  	$('#on').click(function() {
		$bgid.css("animation-name", "startup");
		$on = $("#on");
		if($on.attr("rows", "1")){
			$b1.attr("src", "images/brightness_filled_1.png");
			$b2.attr("src", "images/brightness_empty_2.png");
			$b3.attr("src", "images/brightness_empty_3.png");
			$b4.attr("src", "images/brightness_empty_4.png");
		}
		var val = ($("#on").attr("value") === "START") ? "EXIT" : "START";
        $(this).attr('value', val);
		$on.attr("rows","0");
	});
	
	$b1.click(function() {
		$bgf.css("background-color", "rgb(255, 255, 255)");
		$b1.attr("src", "images/brightness_filled_1.png");
		$b2.attr("src", "images/brightness_empty_2.png");
		$b3.attr("src", "images/brightness_empty_3.png");
		$b4.attr("src", "images/brightness_empty_4.png");
	});
	$b2.click(function() {
		$bgf.css("background-color", "rgb(238, 238, 238)");
		$b1.attr("src", "images/brightness_empty_1.png");
		$b2.attr("src", "images/brightness_filled_2.png");
		$b3.attr("src", "images/brightness_empty_3.png");
		$b4.attr("src", "images/brightness_empty_4.png");
	});
	$b3.click(function() {
		$bgf.css("background-color", "rgb(221, 221, 221)");
		$b1.attr("src", "images/brightness_empty_1.png");
		$b2.attr("src", "images/brightness_empty_2.png");
		$b3.attr("src", "images/brightness_filled_3.png");
		$b4.attr("src", "images/brightness_empty_4.png");
	});
	$b4.click(function() {
		$bgf.css("background-color", "rgb(204, 204, 204)");
		$b1.attr("src", "images/brightness_empty_1.png");
		$b2.attr("src", "images/brightness_empty_2.png");
		$b3.attr("src", "images/brightness_empty_3.png");
		$b4.attr("src", "images/brightness_filled_4.png");
	});
	
	$bgf.dblclick(function(){
		$ui.show();
	});
	$hideUI.click(function(){
		$ui.hide();
	});

});

//------------------------------------------------------------------js------------------------------------------------------------------//

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
