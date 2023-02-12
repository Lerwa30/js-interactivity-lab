const addMovie = (e) => {
    e.preventDefault()
    let inputField = document.querySelector('input')
    
    const  movie = document.createElement('li')
    
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    const movieList = document.querySelector('ul')
    movieList.appendChild(movie)

}

const deleteMovie = (e) => {
    e.target.parentNode.remove()
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
}

let formSubmit = document.querySelector('form')
formSubmit.addEventListener('submit', addMovie)
