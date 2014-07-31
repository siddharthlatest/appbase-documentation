$(document).ready(function() {
	$(".everything-else").css("display","none");
	$(".everything-else").each(function(id, obj) {
		var parent_div = $($(obj).parents(".section")[0]);
		// styling for code reference divs
		parent_div.css({
			"background-color":"#FEFEFE",
			"border-radius":"5px",
			"box-shadow":"0 1px 3px rgba(0,0,0,.15)",
			"margin-bottom":"40px"
		});

	});
	$(".sphinxsidebar").css("height", $('.bodywrapper').height());
	$("#sidebarbutton").css("height", $('.bodywrapper').height());
	
	$(".section").on("click", function(event) {
		var more_content = $(event.currentTarget).find(".everything-else");
		if (more_content.css("display") === "none") {
			if ($(event.currentTarget).children().filter("blockquote").length === 1) {
				$(event.currentTarget).find(".everything-else").css("display","block");
			}
		}
		else {
			if ($(event.currentTarget).children().filter("blockquote").length === 1) {
				$(event.currentTarget).find(".everything-else").css("display","none");
			}
		}
		$(".sphinxsidebar").css("height", $('.bodywrapper').height());
		$("#sidebarbutton").css("height", $('.bodywrapper').height());
		adjust_sidebar_contents();
		return false;
	});
});