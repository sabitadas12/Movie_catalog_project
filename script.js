document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.getElementById('movieContainer');
    const searchInput = document.getElementById('searchInput');
    
    
    const movies = [
        {
            title: "Inception",
            poster: "./image/inception.jpg",
            description: "A thief who steals corporate secrets through dream-sharing technology.",
            trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
        },
        {
            title: "Interstellar",
            poster: "./image/Interstaller.jpg",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
        },
        {
            title: "Avatar",
            poster: "./image/Avatar.jpg",
            description: "Avatar is a science fiction retelling of the history of North and South America in the early colonial period.",
            trailer: "https://www.youtube.com/embed/d9MyW72ELq0?si=SArG3HXf7av-5kpc" 
        },
        {
            title: "3 Idiots",
            poster: "./image/3Idiots.jpg",
            description: "The film is a satire about the social pressures of the Indian education system and is loosely based on Chetan Bhagat's 2004 novel Five Point Someone: What NOT to do at IIT!.",
            trailer: "https://youtu.be/K0eDlFX9GMc?si=_057Z9eCupa3uvkr" 
        },
        {
            title: "Dangal",
            poster: "./image/Dangal.jpg",
            description: "The film is based on the true story of champion wrestler Mahavir Singh Phogat (Aamir Khan), who coaches his daughters Geeta (Fatima Sana Shaikh) and Babita (Sanya Malhotra) to follow in his footsteps, flying in the face of prejudice and societal oppression",
            trailer: "https://youtu.be/x_7YlGv9u1g?si=MH6IXZcIomLsF51A" 
        },
    
    ];

    function displayMovies(movieList) {
        movieContainer.innerHTML = ''; 
        movieList.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <button onclick="window.open('${movie.trailer}', '_blank')">Watch Trailer</button>
            `;
            
            movieContainer.appendChild(movieCard);
        });
    }

    
    function searchMovies() {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        displayMovies(filteredMovies);
    }

    
    displayMovies(movies);

    
    searchInput.addEventListener('input', searchMovies);
});
