const joke = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};
	try {
		const res = await fetch('https://icanhazdadjoke.com', config);
		const data = await res.json();
		joke.innerHTML = data.joke;
	} catch (error) {
		console.log(error);
	}
}

btn.addEventListener('click', generateJoke);
