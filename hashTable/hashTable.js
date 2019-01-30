function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

HashTable.prototype.hash = function(key) {
	let total = 0; 
	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	const bucket = total % this.numBuckets;
	return bucket;
} 

HashTable.prototype.insert = function(key, value) {
	const index = this.hash(key);
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	}
	else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	}
	else {
		let currentNode = this.buckets[index];
		while (currentNode.next) {
			if (currentNode.next.key === key) {
				currentNode.next.value = value;
			}
			currentNode = currentNode.next;
		}
		currentNode.next = new HashTable(key, value);
	}
}

const myHT = new HashTable(30);
myHT.insert('Dean', 'dean@example.com');
myHT.insert('Kenneth', 'kenneth@example.com');
myHT.insert('Dane', 'dane@example.com');
myHT.insert('asd', 'asd@example.com');
myHT.insert('Dane', 'dane@changed.com');

console.log(myHT.buckets);
