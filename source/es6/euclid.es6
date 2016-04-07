$(function()
{
	var gcd = new GreatestCommonDivisor(14, 21);
	var outputElement = $(".output");

	outputElement.append( gcd.displayGcd() );
});

class GreatestCommonDivisor
{
	constructor(_a = 1, _b = 1)
	{
		this.a = _a;
		this.b = _b;
	}

	/* ユークリッド互除法で最大公約数を求め、返す */
	static euclid(_a, _b)
	{
		var a = _a; var b = _b;
		var remainder = a % b;

		// console.log(remainder + " : " + b);
		if(parseInt(remainder) === 0)
		{
			return parseInt(b);
		}
		this.euclid(b, remainder);
	}

	/* 最大公約数を案内する文字列を返す */
	displayGcd()
	{
		var gcd = GreatestCommonDivisor.euclid(this.a, this.b);
		console.log( gcd );

		var string = this.a + " と " + this.b + " の最大公約数は " + gcd;
		return string;
	}
}
