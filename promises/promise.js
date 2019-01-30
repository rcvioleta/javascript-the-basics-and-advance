const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {
	return fetch(url).then(response => response.json());
})).then(result => {
	result.map(link => {
		console.log(link.slice(0, 10));
	})
}).catch(err => console.log(err));