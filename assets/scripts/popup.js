  function setPopup(pic) {
      let app = document.querySelector('main');
      let setModal = `
              <div class = "modal">
               <img src= "${pic}"  >
               <span> x </span>
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