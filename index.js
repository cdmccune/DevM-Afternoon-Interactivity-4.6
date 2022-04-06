let message = document.querySelector(`#message`)

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=>{message.classList.add('hide')},1000)
}

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector(`input`).value
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    let deletebtn = document.createElement("button")
    deletebtn.textContent="X"
    deletebtn.addEventListener("click", deleteMovie)
    movie.appendChild(deletebtn)
    document.querySelector(`ul`).appendChild(movie)
}

document.querySelector(`form`).addEventListener(`submit`, addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = `Movie Deleted!`
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle("checked")
    message.textContent = event.target.classList.contains('checked') ? `Movie Watched!` : `Movie Added Back!`
    revealMessage()
}