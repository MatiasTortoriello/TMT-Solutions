const abrirDirecciones= document.querySelector("#agregar-direccion");
const abrirPagos= document.querySelector("#agregar-pago");
const modalDireccion= document.querySelector("#modal-direcciones");
const modalPagos= document.querySelector("#modal-pagos");
const agregarDireccion= document.querySelector("#agregardireccion");
const agregarAlias= document.querySelector("#agregaralias");
const agregarMetodo= document.querySelector("#agregarAliasMetodo")
const registrarDireccion= document.querySelector("#formdirecciones")
const botonAgregarMetodo= document.querySelector("#formmetodos")
let listaDeDireccionesRegistradas=JSON.parse(localStorage.getItem("Direcciones"));


abrirDirecciones.addEventListener("click", () =>{
    modalDireccion.showModal();
})
registrarDireccion.addEventListener("submit", (e)=>{
    e.preventDefault();
    registrarDirecciones();
    registrarDireccion.submit();
    })

botonAgregarMetodo.addEventListener("submit", (e)=>{
    e.preventDefault();
    registrarMetodos();
    botonAgregarMetodo.submit();
    })

    

abrirPagos.addEventListener("click", () =>{
    modalPagos.showModal();
})

let direccionesRegistradas=[];
function registrarDirecciones(){
    
    let direccionNueva = {
        "alias": agregarAlias.value,
        "direccion": agregarDireccion.value
    }

    direccionesRegistradas.push(direccionNueva);
    console.log(direccionesRegistradas);

    direccionesLocalStorage();
}

let metodosRegistrados=[];
function registrarMetodos(){
    
    let metodoNuevo = {
        "alias": agregarMetodo.value
    }

    metodosRegistrados.push(metodoNuevo);
    console.log(metodosRegistrados);

    metodosLocalStorage();
}


function direccionesLocalStorage(){
    localStorage.setItem("Direcciones", "Direccion")
    localStorage.setItem("Direcciones",JSON.stringify(direccionesRegistradas))
}

function metodosLocalStorage(){
    localStorage.setItem("Metodos", "Metodo")
    localStorage.setItem("Metodos",JSON.stringify(metodosRegistrados))
}