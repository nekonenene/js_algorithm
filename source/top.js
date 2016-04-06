"use strict";

window.addEventListener("load", function () {}, false);

$(function () {
	// jqBasicTest();
	// jqHandlerTest();
	algo1();
});

function algo1() {
	var x = 10;
	var y = x + 5;
	$(".output").text("y = " + y);
}

// jQuery の基本
function jqBasicTest() {
	$(".output").text("<b>output, output</b>");
	$(".output").after("<b>outpit, outpit</b>");
	$(".output").append("<b>outpat, outpat</b>");
}

// jQuey でのイベント処理
function jqHandlerTest() {
	$(".test-button").click(function () {
		$(".output").css("color", "red");
		$(this).css("color", "red");
		console.log("Hello");
	});
}