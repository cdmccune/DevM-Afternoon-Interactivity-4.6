let message = document.querySelector(`#message`)

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
    // message.textContent = `${event.target.parentNode.children[0].textContent} Deleted!`
    message.textContent = `${event.target.previousElementSibling.textContent} Deleted!`
    
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle("checked")
    message.textContent = event.target.classList.contains('checked') ? `${event.target.textContent} Watched!` : `${event.target.textContent} Added Back!`
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=>{message.classList.add('hide')},1000)
}