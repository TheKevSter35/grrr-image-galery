  function popup(pic) {
    let app = document.querySelector('main');
    let setModal = `
              <div class = "modal">
                <div class = "inner">
                  <img src= "${pic}">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
               </div>
              </div>
            `;
    app.insertAdjacentHTML('beforeend', setModal);
    let close = document.querySelector('span');
    close.addEventListener("click", closeModal);

    function closeModal(pic) {
      let modal = document.getElementsByClassName('modal')[0]
      modal.remove()
    }
  }