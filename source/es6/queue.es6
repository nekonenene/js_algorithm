$(function()
{
	var queue = new Queue();
	var outputElement = $(".output");

	queue.enqueue(3);
	queue.enqueue(8);
	queue.enqueue(7);
	queue.enqueue(5);
	outputElement.append("1回目のdequeue = " + queue.dequeue() + "<br>");
	outputElement.append("2回目のdequeue = " + queue.dequeue() + "<br>");
});

class Queue
{
	constructor(_elements = [], _length = 0)
	{
		this.elements = _elements.concat();
		this.length   = _length;
	}

	// エンキュー : stack push と同じ
	enqueue(_value)
	{
		this.elements[this.length] = _value;
		++this.length;
	}

	// デキュー : 先頭の値を取り出す
	dequeue()
	{
		var value = this.elements[0];

		for(var i = 0; i < (this.length - 1); ++i)
		{
			this.elements[i] = this.elements[i+1];
		}

		delete this.elements[this.length];
		--this.length;

		return value;
	}
}
