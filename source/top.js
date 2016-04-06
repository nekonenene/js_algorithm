"use strict";

window.addEventListener("load", function () {}, false);

// jQuery の基本
$(function () {
	$(".output").css("color", "blue");
});

// イベント処理
/*
function doSomething(){
	console.log("Hello");
}
*/

$(function () {
	$(".test-button").click(function () {
		$(".output").css("color", "red");
		$(this).css("color", "red");
		console.log("Hello");
	});
});