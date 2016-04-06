$(function()
{
	// jqBasicTest();
	// jqHandlerTest();
	algo1();
});

// １：順次処理
function algo1()
{
	var x = 10;
	var y = x + 5;
	$(".output").text("y = " + y);

	var cards = initCards();
	console.log( cards );
	$(".output").text( cards[5].displayCard() );
}

// Joker を除く 52 枚のカードを生成
function initCards()
{
	var cards = [];
	for(var suitId = 0; suitId < 4; ++suitId)
	{
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
		for(var i = 1; i <= 13; ++i)
		{
			cards.push(new Card(suit, i));
		}
	}
	return cards;
}

// トランプクラス
class Card
{
	constructor(_suit, _number)
	{
		this.suit   = _suit;
		this.number = _number;
	}

	// カードの文字と番号を返す
	displayCard()
	{
		return ("[" + this.suit + "" + this.number + "]");
	}
}

// jQuery の基本
function jqBasicTest()
{
	$(".output").text("<b>output, output</b>");
	$(".output").after("<b>outpit, outpit</b>");
	$(".output").append("<b>outpat, outpat</b>");
}

// jQuey でのイベント処理
function jqHandlerTest()
{
	$(".test-button").click(function(){
		$(".output").css("color", "red");
		$(this).css("color", "red");
		console.log("Hello");
	});
}
