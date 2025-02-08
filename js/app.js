const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');
const message3 = document.getElementById('message-3');
const readed = document.getElementById('readed');
const counter = document.getElementById("counter");

const countMessages = [message1, message2, message3];
const iterador = 3; // Inicializar iterador

function ToRead() {
    let iterador = 3;
    
    countMessages.forEach(element => {
        if (element.classList.contains('message--active')) {
            element.addEventListener("click", () => {
                element.classList.remove('message--active');
                --iterador;
                counter.innerHTML = iterador;
            }, {once: true});
        } else {
            console.log('Ha ocurrido un error');
        }
    });
}

ToRead();