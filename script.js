let movie1 = 
{
    name:"harry",
    Img:"https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    
}
let movie2 = 
{
    name:"harry potter",
    Img:"https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    
}
let movie3 =
 {
    name:"harry potter",
    Img:"https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
   
}
let movies = []
movies.push(movie1 , movie2 ,movie3);
let movieContainer = document.getElementById("container")

movies.forEach(movie => {
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.Img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;
});
