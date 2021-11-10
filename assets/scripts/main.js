import { setImages } from './modules/setimages.js';
import { getImages } from './modules/getimages.js';
import { limit, incLimit } from './modules/limiter.js';

setImages()

let button = document.getElementById('submitbtn')
button.addEventListener("click", setNewLimit);

function setNewLimit() {
    incLimit()
    getImages()
}
