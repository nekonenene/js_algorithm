$(function()
{
	var list = new LinkedList();
	list.addLastNode(3);
	list.addLastNode(8);
	list.addLastNode(7);
	list.addLastNode(5);

	$(".output").append(list.toString() + "<br><br>");


	/* STUDY! 先頭に要素を足すことに関しては、配列より連結リストのほうが速い */
	const TRY_TIMES = 500; // 試行回数

	console.time("array");
	var testArray = [];
	for(var i = 0; i < TRY_TIMES; ++i)
	{
		testArray = [Math.random()].concat(testArray);
	}
	console.timeEnd("array"); // 303.74ms : 1万回にて

	console.time("linked_list");
	var linkedList = new LinkedList();
	for(var i = 0; i < TRY_TIMES; ++i)
	{
		linkedList.addFirstNode(Math.random());
	}
	console.timeEnd("linked_list"); // 2.51ms : 1万回にて
});

/* Nodeクラス : 連結リストのための各ノードを示す */
class Node
{
	constructor(_value, _nextNode = null)
	{
		this.value    = _value;
		this.nextNode = _nextNode;
	}
}

/* 連結リストに関するクラス */
class LinkedList
{
	constructor(_firstNode = null)
	{
		this.firstNode = _firstNode;
	}

	/* 一番最後のノードに新たなノードを足し、そこへリンクさせる */
	addLastNode(_value)
	{
		var node = new Node(_value);

		if(this.firstNode === null)
		{
			this.firstNode = node;
			return;
		}

		var lastNode = this.getLastNode();
		lastNode.nextNode = node;
	}

	addFirstNode(_value)
	{
		var node = new Node(_value);

		node.nextNode = this.firstNode;
		this.firstNode = node;
	}

	/* 最初のノードからリンクをたどり、最後のノードを出力する */
	getLastNode()
	{
		if(this.firstNode === null)
		{
			return null;
		}

		var node = this.firstNode;

		// 最後のノードまでリンクを辿っていく
		while(node.nextNode !== null)
		{
			node = node.nextNode;
		}
		return node;
	}

	toString()
	{
		if(this.firstNode === null)
		{
			return "";
		}

		var string = "";
		var node   = this.firstNode;
		do{
			string += node.value.toString();
			node = node.nextNode;
			if(node === null)
			{
				break;
			}else{
				string += ", ";
			}
		}while(true);

		return string;
	}
}
