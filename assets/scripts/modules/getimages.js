let limit = 5

export async function getImages() {
    const responce = await fetch('../../../data.json')
    const data = await responce.json()
    let app = document.querySelector('section[data-route=gifs]');
    data.filter(element => element.id == limit).map((image) => {
            let images = `
              <li class = "results">
               <img src= "${image.url}" onclick="setpopup(this.src)" >
               <p>${image.id}</p>
                <a href="${image.url}" download>Test Download </a>
              </li>
            `;
            app.insertAdjacentHTML('beforeend', images);
        
    })
}

let button = document.getElementById('submitbtn')
button.addEventListener("click", incCounter);

function incCounter() {
    limit = (limit + 1)
    getImages()

}

