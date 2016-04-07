"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var stack = new Stack();
	var outputElement = $(".output");

	stack.push(3);
	stack.push(8);
	stack.push(7);
	stack.push(5);
	outputElement.append("配列の長さ : " + stack.length + "  <<< " + stack.elements.toString() + "<br>");
	outputElement.append("1回目のdestack = " + stack.pop() + "<br>");
	outputElement.append("2回目のdestack = " + stack.pop() + "<br>");
	outputElement.append("配列の長さ : " + stack.length + "  <<< " + stack.elements.toString() + "<br><br>");
});

var Stack = function () {
	function Stack() {
		var _elements = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var _length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		_classCallCheck(this, Stack);

		this.elements = _elements.concat();
		this.length = _length;
	}

	// 後方に加える


	_createClass(Stack, [{
		key: "push",
		value: function push(_value) {
			this.elements[this.length] = _value;
			++this.length;
		}

		// 後方の値を取り出す

	}, {
		key: "pop",
		value: function pop() {
			var value = this.elements[this.length - 1];
			delete this.elements[this.length - 1];
			--this.length;

			return value;
		}
	}]);

	return Stack;
}();