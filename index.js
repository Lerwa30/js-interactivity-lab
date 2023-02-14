const message = document.querySelector('#message')

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
    message.textContent = `${e.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
    e.target.parentNode.remove()
    
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')

    if (e.target.classList.contains('checked')) {
        message.textContent = `${e.target.textContent} watched!`
    } else {
        message.textContent = `${e.target.textContent} added back!`
    }
    revealMessage()

}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

let formSubmit = document.querySelector('form')
formSubmit.addEventListener('submit', addMovie)
