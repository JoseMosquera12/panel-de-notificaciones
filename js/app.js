const readed = document.getElementById("readed");
const counter = document.getElementById("counter");
const messages = document.querySelectorAll(".message");

// const GET_STATUS_READ = element.getAttribute('data-isRead');
const Arrayread = [1,2,3];
// const CHANGE_STATUS_READ = elemento.setAttribute('data-isRead', "true")

// const isread = {
//   GET_STATUS(element) {
//     return element.getAttribute('data-isRead')
//   },
//   SET_STATUS(element) {
//     return element.setAttribute('data-isRead', "true")
//   }
// }

  function setStatus(elemento) {
    return elemento.setAttribute("data-isRead", "true");
  }

  function getStatus(elemento) {
    return elemento.getAttribute('data-isRead');
  }

let iterator = 0;

messages.forEach(element => {
  if( !JSON.parse(getStatus(element)) == true) {  
      ++iterator
      counter.textContent = iterator;

      element.addEventListener('click',() => {
          setStatus(element);
            iterator === 0 ? iterator : --iterator;
            counter.textContent = iterator;
        }, {once: true})      
  }
});

readed.addEventListener('click', () => {
    messages.forEach((element)=> {
      setStatus(element);
    })
    iterator = 0
    counter.textContent = iterator;
});


// messages.forEach(element => {
//   element.addEventListener("click", () => {
//     element.dataset.isRead = "true";
//   })

//   changeStatus(element)
// })
// console.log(messages.dataset.isRead)
// function changeStatus(element) {
//   console.log(element.dataset.isRead)
//   if (element.dataset.isRead == false) {
//     console.log("I am not read");
//   }
// }

// function toRead(element) {
    
// }
// function countMessages() {
    
// }
// function ToRead() {
//     let iterador = 3;

//     countMessages.forEach(element => {
//         if (element.classList.contains('message--active')) {
//     element.addEventListener("click", () => {
//                 element.classList.remove('message--active');
//                 --iterador;
//                 counter.innerHTML = iterador;
//             }, {once: true});
//         } else {
//             console.log('Ha ocurrido un error');
//             }
// });
// }

// ToRead();
