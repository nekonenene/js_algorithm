"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var queue = new Queue();
	var outputElement = $(".output");

	queue.enqueue(3);
	queue.enqueue(8);
	queue.enqueue(7);
	queue.enqueue(5);
	outputElement.append("1回目のdequeue = " + queue.dequeue() + "<br>");
	outputElement.append("2回目のdequeue = " + queue.dequeue() + "<br>");
});

var Queue = function () {
	function Queue() {
		var _elements = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		var _length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		_classCallCheck(this, Queue);

		this.elements = _elements.concat();
		this.length = _length;
	}

	// エンキュー : stack push と同じ


	_createClass(Queue, [{
		key: "enqueue",
		value: function enqueue(_value) {
			this.elements[this.length] = _value;
			++this.length;
		}

		// デキュー : 先頭の値を取り出す

	}, {
		key: "dequeue",
		value: function dequeue() {
			var value = this.elements[0];

			for (var i = 0; i < this.length - 1; ++i) {
				this.elements[i] = this.elements[i + 1];
			}

			delete this.elements[this.length];
			--this.length;

			return value;
		}
	}]);

	return Queue;
}();