"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var list = new LinkedList();
	list.add(3);
	list.add(8);
	list.add(7);
	list.add(5);

	$(".output").append(list.toString() + "<br><br>");
});

var Node = function Node(_value) {
	var _nextNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	_classCallCheck(this, Node);

	this.value = _value;
	this.nextNode = _nextNode;
};

var LinkedList = function () {
	function LinkedList() {
		var _firstNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

		_classCallCheck(this, LinkedList);

		this.firstNode = _firstNode;
	}

	// 一番最後のノードに新たなノードを足し、そこへリンクさせる


	_createClass(LinkedList, [{
		key: "add",
		value: function add(_value) {
			var node = new Node(_value);

			if (this.firstNode === null) {
				this.firstNode = node;
				return;
			}

			var lastNode = this.getLastNode();
			lastNode.nextNode = node;
		}

		// 最初のノードからリンクをたどり、最後のノードを出力する

	}, {
		key: "getLastNode",
		value: function getLastNode() {
			if (this.firstNode === null) {
				return null;
			}

			var node = this.firstNode;

			// 最後のノードまでリンクを辿っていく
			while (node.nextNode !== null) {
				node = node.nextNode;
			}
			return node;
		}
	}, {
		key: "toString",
		value: function toString() {
			if (this.firstNode === null) {
				return "";
			}

			var string = "";
			var node = this.firstNode;
			do {
				string += node.value.toString();
				node = node.nextNode;
				if (node === null) {
					break;
				} else {
					string += ", ";
				}
			} while (true);

			return string;
		}
	}]);

	return LinkedList;
}();