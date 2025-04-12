$("document").ready(function () {
	// $("p").click(function () {
	// 	$(this).slideToggle("slow");
	// });

	// $("button").mouseenter(function () {
	// 	$(this).removeClass("makeRed").addClass("makeBlue");
	// });

	// $("button").mouseleave(function () {
	// 	$(this).removeClass("makeBlue").addClass("makeRed");
	// });

	// $('.box').click(function() {
	// 	var className = $(this).attr('class').split(' ');
	//     $("." + className[1]).css("background-color", "red");
	// });

	$(".box").click(function () {
		/**
		 * When click on an element with "boc class",
		 * this event will be triggered.
		 */
		var classNames = $(this).attr("class").split(" ");
		var boxClass = classNames[0];
		var numberClass = classNames[1];
		if ($(this).css("background-color") == "rgb(255, 0, 0)") {
			// If the background color is red, change it to black.
			$("." + numberClass).css("background-color", "#000");
		} else {
			// Else turn all elements with box-class to black and then
			// turn all elements with the same number-class as clicked elements to red.
			$("." + boxClass).css("background-color", "#000");
			$("." + numberClass).css("background-color", "red");
		}
	});
});
