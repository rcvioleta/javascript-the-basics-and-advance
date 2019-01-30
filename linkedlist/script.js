function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
}

const LL = new LinkedList();
LL.addToHead(10);
LL.addToHead(20);
LL.addToHead(30);
LL.addToTail(40);
LL.addToTail(50);
LL.addToTail(60);
console.log(LL);