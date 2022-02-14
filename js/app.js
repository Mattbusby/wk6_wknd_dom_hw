document.addEventListener('DOMContentLoaded', () => {
    const newFilmForm = document.querySelector('#new-film-form');
    newFilmForm.addEventListener('submit', handleNewFilmFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewFilmFormSubmit = function (event) {
    event.preventDefault();
    const watchListItem = createWatchListItem(event.target);
    const watchList = document.querySelector('#watch-list');
    watchList.appendChild(watchListItem);
    event.target.reset();
}

const createWatchListItem = function (form) {
    const watchListItem = document.createElement('ul');
    watchListItem.classList.add('watch-list-item');
    
    const title = document.createElement('h2');
    title.textContent = form.title.value;
    watchListItem.appendChild(title);

    const rottenTomatoes = document.createElement('h3');
    rottenTomatoes.textContent = form.rottenTomatoes.value;
    watchListItem.appendChild(rottenTomatoes);

    const releaseYear = document.createElement('h4');
    releaseYear.textContent = form.releaseYear.value;
    watchListItem.appendChild(releaseYear);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    watchListItem.appendChild(genre);

    const type = document.createElement('p');
    type.textContent = form.type.value;
    watchListItem.append(type);

    return watchListItem;
}

const handleDeleteAllClick = function (event) {
    const watchList = document.querySelector('#watch-list');
    watchList.innerHTML = '';
}