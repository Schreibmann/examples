$(document).ready(function(){

	$(".second-screen").hide();

	$(".circles-wrapper").children("div").click(function(){
		$(".second-screen").show();

		$(".first-screen").addClass("slide-out");

		$(".second-screen, .full-width-bar, .background-slide-2").removeClass("hidden");
		$(".second-screen, .full-width-bar, .background-slide-2").addClass("fade-in");

		$(".tabs").lightTabs(parseInt($(this).attr("data-id")));
	});
});
