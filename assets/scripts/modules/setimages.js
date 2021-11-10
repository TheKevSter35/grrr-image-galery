import {
  limit
} from './limiter.js';

export async function setImages() {
  const responce = await fetch('../../../data.json')
  const data = await responce.json()
  let app = document.querySelector('ul[data-route=gallery]');
  data && data.map((image, index) => {
    if (index < limit) {
      let images = `
              <li class = "results">
               <img src= "${image.url}" onclick="popup(this.src)">
               <article>
                <h3>${image.copy}</h3>
                <a href="${image.url}" download>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download
                  </a>
               </article>
              </li>
            `;
      app.insertAdjacentHTML('beforeend', images);
    }
    
  })
    const totalImages = document.querySelector('h3');
    totalImages.innerText = `(${data.length}) Artworks`;
}