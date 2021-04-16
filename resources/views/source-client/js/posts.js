$(function(){
	var a = 0;
	$(".posts .modal .modal-body img").click(function(){
		var widhtBrowser = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var scale = widhtBrowser / 800;
		if (!$(this).hasClass("clicked")){
			a++;
			$(this).css("position", "relative");
			$(this).css("z-index", a);
			$(this).css("transform", "scale(" + scale + "," + scale + ")");
			$(this).addClass("clicked");
			$(this).css("cursor", "zoom-out");
		}
		else{
			$(this).css("transform", "scale(1,1)");
			$(this).removeClass("clicked");
			$(this).css("cursor", "zoom-in");
		}
	});
	$(".posts .modal .modal-content .close-modal").click(function(){
		$("img").css("transform", "scale(1,1)");
		$("img").removeClass("clicked");
	});

	$("[data-toggle='tooltip']").tooltip({
		placement:"auto",
	});
	$("[data-toggle='popover']").popover({
		trigger:"hover",
		placement:"left",
		content: $("#demo").html(),
		html:true,
		fallbackPlacement: "flip"
	});
	$(document).keyup(function(e){
		if (e.keyCode == 27){
			$(".posts .modal .modal-body img").css("transform", "scale(1,1)");
			$(".posts .modal .modal-body img").removeClass("clicked");
		}
	});

	$(".btn-lienhe").click(function(){
		if ($(this).parent(".col").find(".lienhe").hasClass('showed')){
			$(this).parent(".col").find(".lienhe").slideUp("fast");
			$(this).parent(".col").find(".lienhe").removeClass('showed');
		}
		else{
			$(".lienhe").removeClass('showed').slideUp();
			$(this).parent(".col").find(".lienhe").slideDown("fast");
			$(this).parent(".col").find(".lienhe").addClass('showed');
		}
	});
	$(".posts .card img, .posts .card .card-body .body-content, .posts .card .card-body .top-info .view-post").click(function(){
		$(".lienhe").slideUp().removeClass("showed");
	});
});