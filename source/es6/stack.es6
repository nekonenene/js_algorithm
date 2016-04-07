$(function()
{
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

class Stack
{
	constructor(_elements = [], _length = 0)
	{
		this.elements = _elements.concat();
		this.length   = _length;
	}

	// 後方に加える
	push(_value)
	{
		this.elements[this.length] = _value;
		++this.length;
	}

	// 後方の値を取り出す
	pop()
	{
		var value = this.elements[this.length - 1];
		delete this.elements[this.length - 1];
		--this.length;

		return value;
	}
}
