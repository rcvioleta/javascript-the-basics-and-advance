/*
function pow(multiplier, number) {
	if (number === 1) {
		return multiplier;
	} else {
		return multiplier * pow(multiplier, number - 1);
	}
}

/*
pow(2, 3)

EXECUTION CONTEXT

pow(2, 1) // multiplier was returned
pow(2, 2) // 2 * 2
pow(2, 3) 2 * 4
*/

// console.log(pow(2, 3)); 

/*
Context: { x: 2, n: 3, at line 1 } call: pow(2, 3)
Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)

Context: { x: 2, n: 2, at line 1 } call: pow(2, 2)
Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)

Context: { x: 2, n: 1, at line 1 } call: pow(2, 1)
Context: { x: 2, n: 2, at line 5 } call: pow(2, 2)
Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)

Context: { x: 2, n: 2, at line 5 } call: pow(2, 2)
Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)

*/

function factorial(n) {
	return n === 1 ? n : n * factorial(n - 1);
}

console.log(factorial(5));