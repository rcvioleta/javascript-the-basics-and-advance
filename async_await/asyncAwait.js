const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/users'
]

const getData = async function() {
	try {
		const [ posts, albums, users ] = await Promise.all(urls.map(url => 
			fetch(url).then(resp => resp.json())
		))
		console.log('posts', posts.slice(0, 10));
		console.log('albums', albums.slice(0, 10));
		console.log('users', users.slice(0, 10));
	}
	catch (error) {
		console.log('error', error);
	}
}

getData();