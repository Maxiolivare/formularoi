
//ALERTAAAA
let botonColor = document.getElementById('liveAlertBtn');
let inputColor = document.getElementById('intAlert');
let alerta = document.getElementById('textoAlerta');

botonColor.addEventListener('click', () => {
    let color = inputColor.value;
    alerta.style.backgroundColor = color;
    alerta.innerText = `Este es tu color seleccionado: ${color}`;
});

// POPOVER
// Inicializa el popover con contenido vacío (luego lo cambiaremos dinámicamente)
  let popoverInput = document.getElementById("intPopover");
  let popoverButton = document.querySelector('[data-bs-toggle="popover"]');
 
  let popover = new bootstrap.Popover(popoverButton, {
  content: () => popoverInput.value, trigger: 'focus'
});

// TOAST
let botonToast = document.getElementById('liveToastBtn');
let inputToast = document.getElementById('intToast');
let toastOriginal = document.getElementById('liveToast');
let containerToast = document.querySelector('.toast-container');

botonToast.addEventListener('click', () => {
    let cantidad = parseInt(inputToast.value);

    for (let i = 0; i < cantidad; i++) {
        let nuevoToast = toastOriginal;
        nuevoToast.querySelector('.toast-body').innerText = `Hola, soy el toast numero ${i + 1}`;
        containerToast.appendChild(nuevoToast);
        let instanciaToast = new bootstrap.Toast(nuevoToast);
        instanciaToast.show();
    }
    if(inputToast.value < 0){
      alert('No escojas numeros negativos 😒')
    }
});

// CARRUSEL
let inputCarrusel = document.getElementById('intCarrusel');
let botonCarrusel = document.getElementById('cambiarTitulo');

botonCarrusel.addEventListener('click', () => {
    let nuevoTitulo = inputCarrusel.value;
    let activo = document.querySelector('.carousel-item.active .carousel-caption h5');
    if (activo) {
        activo.textContent = nuevoTitulo;
    }
});