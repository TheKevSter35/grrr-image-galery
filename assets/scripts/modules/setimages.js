
let limit = 5

export async function setImages() {
    const responce = await fetch('../../../data.json')
    const data = await responce.json()
    let app = document.querySelector('section[data-route=gifs]');
    console.log()
    data && data.map((image, index) => {
        // console.log(index)
        if (index < limit) {
            let images = `
              <li class = "results">
               <img src= "${image.url}" onclick="setpopup(this.src)" >
               <p>${image.id}</p>
                <a href="${image.url}" download>Test Download </a>
              </li>
            `;
            app.insertAdjacentHTML('beforeend', images);
            
        }
    })
}

