$(document).ready(function() {
	$(".everything-else").css("display","none");
	$(".everything-else").each(function(id, obj) {
		var parent_div = $($(obj).parents(".section")[0]);
		parent_div.css("background-color","#EFEFEF");
	});
	
	$(".section").on("click", function(event) {
		var more_content = $(event.currentTarget).find(".everything-else");
		if (more_content.css("display") === "none") {
			$(event.currentTarget).find(".everything-else").css("display","block");
			$(event.currentTarget).css("background-color","#EFF6FB");
		}
		else {
			$(event.currentTarget).find(".everything-else").css("display","none");
			$(event.currentTarget).css("background-color","#EFEFEF");
		}
		$(".sphinxsidebar").css("height", $('.bodywrapper').height());
		$("#sidebarbutton").css("height", $('.bodywrapper').height());
		adjust_sidebar_contents();
		return false;
	});
});