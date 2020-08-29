import './styles.css';
import {debounce} from 'lodash'
import searchPic from './services.js'
import pictureTemplate from './picture-template.hbs'

const searchForm = document.querySelector('#search-form');
const galleryList = document.querySelector('.gallery');
const btn = document.querySelector('#load');


searchForm.addEventListener('input', debounce(imageFormSearch, 1000))
btn.addEventListener('click', loadMoreAction)


function imageFormSearch() {
    const inputSearch = searchForm.query.value;

    clearList()

    searchPic.resetPage();

    searchPic.searchQuery = inputSearch;

    searchPic.fetchPictures().then(hits => {
        const markup = pictureMarkup(hits);
        insertItems(markup)

    });

}

function pictureMarkup(items) {
    return pictureTemplate(items)
}


function insertItems(items) {
    galleryList.insertAdjacentHTML('beforeend', items)
}

function loadMoreAction() {
    searchPic.fetchPictures().then(hits => {
        const markup = pictureMarkup(hits);
        insertItems(markup)

    });
}

function clearList(){
    galleryList.innerHTML = '';
}