/**
 * --------------------
 * Single Character
 * --------------------
 * \d   :   0-9
 * \w   :   A-Za-z0-9
 * \s   :   whitespace
 * .    :   any character
 * --------------------
 * Quantifiers
 * --------------------
 * *	: 	0 or more
 * +	: 	1 or more
 * ?	: 	0 or 1
 * { min, max } or { n }
 * --------------------
 * Position
 * --------------------
 * ^ 	: 	beginning (of a line)
 * $ 	: 	end (of a line)
 * \b 	: 	word boundary
 *
 * 
 */

const someText = 'In case of fire dial 87000 or 23000';
const pattern = /.*\d\d\d/;
const checkRegex = pattern.test(someText);
console.log(checkRegex);