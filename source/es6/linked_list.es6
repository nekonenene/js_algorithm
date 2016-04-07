$(function()
{
	var list = new LinkedList();
	list.add(3);
	list.add(8);
	list.add(7);
	list.add(5);

	$(".output").append(list.toString() + "<br><br>");
});

class Node
{
	constructor(_value, _nextNode = null)
	{
		this.value    = _value;
		this.nextNode = _nextNode;
	}
}

class LinkedList
{
	constructor(_firstNode = null)
	{
		this.firstNode = _firstNode;
	}

	// 一番最後のノードに新たなノードを足し、そこへリンクさせる
	add(_value)
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

	// 最初のノードからリンクをたどり、最後のノードを出力する
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
