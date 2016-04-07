"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	$(".output").text("");
	// jqBasicTest();
	// jqHandlerTest();
	// algo1();
	// algo2();
});

// １：順次処理
function algo1() {
	var x = 10;
	var y = x + 5;
	$(".output").text("y = " + y);
}

// ２：ソートを学ぶための下準備
function algo2() {
	var cards = Card.initCards();
	console.log(cards);
	$(".output").html(Card.displayAllCards(cards, 20) + "<br><br>");

	var shuffledCards = Card.shuffleCards(cards);
	$(".output").append(Card.displayAllCards(shuffledCards, 20) + "<br><br>");
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
			var string = "";
			if (this.suit === "♥" || this.suit === "♦") {
				string += "<font color=\"#d93232\">";
			} else {
				string += "<font color=\"#222145\">";
			}
			string += "[" + this.suit + "" + this.number + "]</font>";

			return string;
		}

		/** Joker を除く 52 枚のカードを生成、Card配列として返す */

	}], [{
		key: "initCards",
		value: function initCards() {
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

		/** カードを枚数ぶんの回数シャッフル */

	}, {
		key: "shuffleCards",
		value: function shuffleCards(_cards) {
			var cards = _cards.concat();
			var quantity = cards.length;

			for (var i = 0; i < quantity; ++i) {
				var x = Math.floor(Math.random() * quantity);
				var temp = cards[i];
				cards[i] = cards[x];cards[x] = temp;
			}
			return cards;
		}

		/** Card 配列を文字列にして返す。
  	@param _limit : 最初の何枚まで見せるか。デフォルトは 0（すべて見せる） */

	}, {
		key: "displayAllCards",
		value: function displayAllCards(_cards) {
			var _limit = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

			var quantity = _cards.length;
			var string = "";

			var limit = Number(_limit);
			// console.log(limit);
			if (!(0 < limit && limit < quantity)) {
				limit = quantity;
			}
			for (var i = 0; i < limit; ++i) {
				string += _cards[i].displayCard();
			}

			return string;
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