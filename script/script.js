$(document).ready(function(){
	var order_form_top = 0,
		order_form_bottom = 0;
	$("#nav_button").on("click", function(){
		if ($("nav").css("display") == "none"){
			$("nav").stop().stop().slideDown(1000)
		}
		else{
			$("nav").stop().stop().slideUp(1000)
		};
	});

	function resizeWindow(){
		$(".slider_window").css("height", String($(".slider_block").height()) + "px");
		$(".slider_block").css("width", String(Math.round($("#order .profile_item").length * $(window).width()))+ "px");
		$("#order .profile_item").css("width", String($(".slider_window").width()) + "px");
		order_form_top = $("header").height() + 
					 	 $("#slogan").height() + 
					 	 $("#order").height() + 
					 	 $("#advantages").height() + 
					 	 $("#partners").height();
		order_form_bottom = order_form_top + $("#commodities").height() - $("aside.order_form").height();
	};

	$(window).resize(function(){
		if ($(window).width() >= 768) {
			$("nav").removeAttr( 'style' );
		}; 
		resizeWindow();
	});

	resizeWindow();

// slider start
	$(".slider li").on("click", function(){
		var leftPosition = String(-$(this).index()* $(".slider_window").width()) + "px"; 
		$(".slider_block").stop().stop().animate({
			left: leftPosition
		}, 1000)
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});	

// commodities
	$("#commodities li").on("click", function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

	$(window).on("scroll", function(e){
		if (window.pageYOffset >= Math.round(order_form_top) && 
			window.pageYOffset <= Math.round(order_form_bottom)){
			$("aside.order_form").animate({top: window.pageYOffset - Math.round(order_form_top)},10);
		}
		else if (window.pageYOffset < Math.round(order_form_top)){
			$("aside.order_form").css("top", 0);		
		}
		else if (window.pageYOffset > Math.round(order_form_bottom)){
			$("aside.order_form").css("top", ($("#commodities").height() - $("aside.order_form").height())   + "px");		
		}		
	});

});