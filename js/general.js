var $=jQuery.noConflict();
$(document).ready(function() {
	// ----- Menu ----- 
    //$('input,textarea').placeholder();
    $('.enumenu_ul').responsiveMenu({
        //'menuIcon_text': 'Menu',
        menuslide_overlap: true,
        menuslide_direction: 'left',
        onMenuopen: function() {}
    });
	
	$(".down-arrow a").click(function(){
		$(".Home-intro").addClass("intro-up");
	});
	
	/* Background move to hover */

	var movementStrength = 15;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#top-image").mousemove(function(e){
			  var pageX = e.pageX - ($(window).width() / 2);
			  var pageY = e.pageY - ($(window).height() / 2);
			  var newvalueX = width * pageX * -1 - 25;
			  var newvalueY = height * pageY * -1 - 50;
			  $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});

	//
	$('.down-arrow').on('click',function(e){
		event.preventDefault();
		$('body').addClass("show-home");
	})


	
	
	window.addEventListener('DOMContentLoaded', function () { QueryLoader2(document.querySelector("body"), {
		barColor: "",
		backgroundColor: "",
		percentage: false,
		barHeight: 0,
		minimumTime: 200,
		fadeOutTime: 10,
		onProgress: function (percentage, imagesLoaded, totalImages) {
			$(".loader figure span").css("width", percentage + "%");
		},
		onComplete: function () {
			 setTimeout(function () {
				$(".loader").fadeOut();
			}, 1000) 
		}
	});
	
	
	});
	
	/* ----- Type Text Effects ----- */
	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 1000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
		if (this.isDeleting) { this.txt = fullTxt.substring(0, this.txt.length - 1); }
		else { this.txt = fullTxt.substring(0, this.txt.length + 1); }
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		var that = this;
		var delta = 200 - Math.random() * 100;
		if (this.isDeleting) { delta /= 2; }
		if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;}
		setTimeout(function() { that.tick(); }, delta);
	};
	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
			  new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #fff}";
		document.body.appendChild(css);
	};
	/* --- End Type Text Effects --- */
})