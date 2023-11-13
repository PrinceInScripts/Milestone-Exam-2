document.addEventListener('DOMContentLoaded',()=>{
    const searchInput=document.getElementById('searchInput')
    const movieGrid=document.getElementById('movieGrid')

    searchInput.addEventListener('input',(e)=>{
        const searchTerm=searchInput.value.trim()

        movieGrid.innerHTML=''

    if(searchTerm){
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=7d2a0b62`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.Search){
                data.Search.forEach((movie)=>{
                    const movieElement=document.createElement('div')
                    movieElement.classList.add('movie-card', 'text-white', 'mb-4');

                    movieElement.innerHTML=`
                    <img src="${movie.Poster}" alt="${movie.Title}" class="movie-image">
                    <h2 class="movie-title">${movie.Title}</h2>
                    <Button class="watch-now-button">Watch Now</Button>
                    `

                    movieGrid.appendChild(movieElement)
                })
            }
            else
            console.log("Now Movie Found");
        })
        .catch(error => console.error('Error fetching data:', error));

        
    }
    })

    
})