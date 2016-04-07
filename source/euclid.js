"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var gcd = new GreatestCommonDivisor(14, 21);
	var outputElement = $(".output");

	outputElement.append(gcd.displayGcd());
});

var GreatestCommonDivisor = function () {
	function GreatestCommonDivisor() {
		var _a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

		var _b = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

		_classCallCheck(this, GreatestCommonDivisor);

		this.a = _a;
		this.b = _b;
	}

	/* ユークリッド互除法で最大公約数を求め、返す */


	_createClass(GreatestCommonDivisor, [{
		key: "displayGcd",


		/* 最大公約数を案内する文字列を返す */
		value: function displayGcd() {
			var gcd = GreatestCommonDivisor.euclid(this.a, this.b);
			console.log(gcd);

			var string = this.a + " と " + this.b + " の最大公約数は " + gcd;
			return string;
		}
	}], [{
		key: "euclid",
		value: function euclid(_a, _b) {
			var a = _a;var b = _b;
			var remainder = a % b;

			// console.log(remainder + " : " + b);
			if (parseInt(remainder) === 0) {
				return parseInt(b);
			}
			this.euclid(b, remainder);
		}
	}]);

	return GreatestCommonDivisor;
}();