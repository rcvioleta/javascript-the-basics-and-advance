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
 * .*	: 	anything
 * --------------------
 * Position
 * --------------------
 * ^ 	: 	beginning (of a line)
 * $ 	: 	end (of a line)
 * \b 	: 	word boundary
 * --------------------
 * Character Class
 * --------------------
 * [abc] [-.] [A-Za-z] 
 * ^ 	: 	with char class means except or not
 * --------------------
 * Alternation
 * --------------------
 * (net | com )	 : 	or 
 * --------------------
 * Capturing Group
 * --------------------
 * \(?(\d{3})[-.)]\d{3}[-.]\d{4} 
 * $1-XXX-XXX
 * --------------------
 * test() and match()
 * --------------------
 * test() 	: 	only returns true or false
 * regex.test(someText);
 *
 * match()	: 	returns the matched regex
 * someText.match(regex) 
 * --------------------
 * Flags - Modify behaviors of a regex
 * --------------------
 * g 	: 	global 
 * i 	: 	case insensitive 
 * --------------------
 * exec() - useful to capture regex groups contaniously, only ends when null is returned           
 * --------------------
 * regex.exec(someText)
 * 
 * --------------------
 * split() and replace()
 * --------------------
 * regex = /[,\s]+/;
 * someText.split(regex)
 *
 * someText.replace(regex, newString or callback)
 *
 *
 */

const someText = 'In case of fire dial 87000 or 23000';
const pattern = /.*\d\d\d/;
const checkRegex = pattern.test(someText);
console.log(checkRegex);