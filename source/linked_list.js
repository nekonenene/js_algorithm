"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
	var list = new LinkedList();
	list.addLastNode(3);
	list.addLastNode(8);
	list.addLastNode(7);
	list.addLastNode(5);

	$(".output").append(list.toString() + "<br><br>");

	/* STUDY! 先頭に要素を足すことに関しては、配列より連結リストのほうが速い */
	var TRY_TIMES = 500; // 試行回数

	console.time("array");
	var testArray = [];
	for (var i = 0; i < TRY_TIMES; ++i) {
		testArray = [Math.random()].concat(testArray);
	}
	console.timeEnd("array"); // 303.74ms : 1万回にて

	console.time("linked_list");
	var linkedList = new LinkedList();
	for (var i = 0; i < TRY_TIMES; ++i) {
		linkedList.addFirstNode(Math.random());
	}
	console.timeEnd("linked_list"); // 2.51ms : 1万回にて
});

/* Nodeクラス : 連結リストのための各ノードを示す */

var Node = function Node(_value) {
	var _nextNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	_classCallCheck(this, Node);

	this.value = _value;
	this.nextNode = _nextNode;
};

/* 連結リストに関するクラス */


var LinkedList = function () {
	function LinkedList() {
		var _firstNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

		_classCallCheck(this, LinkedList);

		this.firstNode = _firstNode;
	}

	/* 一番最後のノードに新たなノードを足し、そこへリンクさせる */


	_createClass(LinkedList, [{
		key: "addLastNode",
		value: function addLastNode(_value) {
			var node = new Node(_value);

			if (this.firstNode === null) {
				this.firstNode = node;
				return;
			}

			var lastNode = this.getLastNode();
			lastNode.nextNode = node;
		}
	}, {
		key: "addFirstNode",
		value: function addFirstNode(_value) {
			var node = new Node(_value);

			node.nextNode = this.firstNode;
			this.firstNode = node;
		}

		/* 最初のノードからリンクをたどり、最後のノードを出力する */

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