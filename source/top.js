"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	// jqBasicTest();
	// jqHandlerTest();
	algo1();
});

// １：順次処理
function algo1() {
	var x = 10;
	var y = x + 5;
	$(".output").text("y = " + y);

	var cards = initCards();
	console.log(cards);
	$(".output").text(cards[5].displayCard());
}

// Joker を除く 52 枚のカードを生成
function initCards() {
	var cards = [];
	for (var suitId = 0; suitId < 4; ++suitId) {
		var suit;
		switch (suitId) {
			case 0:
				suit = "♠";
				break;
			case 1:
				suit = "♣";
				break;
			case 2:
				suit = "♥";
				break;
			case 3:
				suit = "♦";
				break;
		}
		for (var i = 1; i <= 13; ++i) {
			cards.push(new Card(suit, i));
		}
	}
	return cards;
}

// トランプクラス

var Card = function () {
	function Card(_suit, _number) {
		_classCallCheck(this, Card);

		this.suit = _suit;
		this.number = _number;
	}

	// カードの文字と番号を返す


	_createClass(Card, [{
		key: "displayCard",
		value: function displayCard() {
			return "[" + this.suit + "" + this.number + "]";
		}
	}]);

	return Card;
}();

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