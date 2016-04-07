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

	var cards = Card.initCards();
	console.log( cards );
	$(".output").html( Card.displayAllCards(cards, 20) );

	cards = Card.shuffleCards(cards);
	$(".output").append( "<br><br>" + Card.displayAllCards(cards, 20) );
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
		var string = "";
		if(this.suit === "♥" || this.suit === "♦")
		{
			string += "<font color=\"#d93232\">";
		}else{
			string += "<font color=\"#222145\">";
		}
		string += ("[" + this.suit + "" + this.number + "]</font>");
		
		return string;
	}

	/** Joker を除く 52 枚のカードを生成、Card配列として返す */
	static initCards()
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

	/** カードを枚数ぶんの回数シャッフル */
	static shuffleCards(_cards)
	{
		var cards = _cards.concat();
		var quantity = cards.length;

		for(var i = 0; i < quantity; ++i)
		{
			var x = Math.floor( Math.random() * quantity );
			var temp = cards[i];
			cards[i] = cards[x]; cards[x] = temp;
		}
		return cards;
	}

	/** Card 配列を文字列にして返す。
		@param _limit : 最初の何枚まで見せるか。デフォルトは 0（すべて見せる） */
	static displayAllCards(_cards, _limit = 0)
	{
		var quantity = _cards.length;
		var string = "";

		var limit = Number(_limit);
		// console.log(limit);
		if(!(0 < limit && limit < quantity))
		{
			limit = quantity;
		}
		for(var i = 0; i < limit; ++i)
		{
			string += _cards[i].displayCard();
		}

		return string;
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
