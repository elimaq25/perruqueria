let usuario = prompt("¿Cual es tu nombre?")
let saludo = alert("Gracias por reservar en nuestro sitio " + usuario )

let promocion = document.getElementById("promocion")
console.log(promocion.innerText)
promocion.innerText = "Aprovecha Marzo y Abril 2x1 en baño para mascotas pequeñas"
console.log(promocion.innerText)

document.getElementById("propietario").value = "Elizabeth";


let parrafo = document.createElement("p");
parrafo.innerHTML = "<h3> Contamos con servicio de recolección y entrega gratis*</h3> <br> <p>*Aplican restricciones</p>";
document.body.append(parrafo);


let boton = document.querySelector("#botonEnviar")
let formulario = document.querySelector("#formulario")
let enlista = document.querySelector("#mascota")
let cliente = document.querySelector("#numCliente")
let registroCliente = document.querySelector("#btnCliente")
let nodoMensaje = document.querySelector("#mensaje")
const perrunos = document.querySelector("#perrunos")


registroCliente.addEventListener("click", registrar)

 



function registrar() {
    let item = document.createElement('li')
    const regCliente = cliente.value
    item.innerText = regCliente 
    lista.append(item)
    localStorage.setItem("client", regCliente)
}

const renderPost = (el) => {
    const li = document.createElement("li")
    li.innerHTML = `
    <h5>${el.title}</h5>
    `
    //console.log(data[i].title)
    perrunos.appendChild(li)
}

const agregar = ()=> {
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: enlista.value,
        body: "baño",
        userId: 1,
        }),
        headers: {
       'Content-type': 'application/json; charset=UTF-8',
         },
       })
        .then((response) => response.json())
        .then((json) => {
            renderPost(json)
            console.log(json)})
        .catch((error)=>{
            console.log(error)
        })

        nodoMensaje.innerText = `Esperamos a ${enlista.value}`
        setTimeout(()=>{
            nodoMensaje.remove("mensaje") 
        }, 3000)
    
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp)=> resp.json())
    .then((data)=>{
        // console.log(data)
        for (let i = 0; i < 5; i++) {
            //const element = data[i];
           renderPost(data[i])
        }
       
    })
    .catch((error)=>{
        console.log(error)
    })

boton.addEventListener("click", agregar)


const mascotas = []

mascotas === "" && alert("Agrega un nombre")
formulario.addEventListener("submit", validarInformacion)
function validarInformacion(e) {
    e.preventDefault();
    console.log("Formulario enviado")
    let mascota = new Mascota (enlista.value)
    mascotas.push(mascota)
    sessionStorage.setItem("mascota", JSON.stringify(mascotas))
    console.log(sessionStorage)
    Swal.fire({
        title: 'Agregado exitosamente',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500

      })
};



class Mascota {
    constructor (name){
        this.name = name
    }
}


const mascots = [
      {nombre: "kimby", raza: "chihuahua", edad: 10, tamanio: "pequeña", propietario: "Elizabeth"},
      {nombre: "Jess", raza: "pomerania", edad: 9, tamanio: "pequeña", propietario: "Elizabeth"} 
]; 



const { nombre, raza, edad, tamanio, propietario} = mascots

console.log(mascots[1].raza)
console.log(mascots[0].nombre)


const mascota1 = {
    nombre: "Lula",
    edad: 2,
    servicio: "corte y baño", 
}

const mascota2 = {
    ...mascota1,
    propietario: "Roger"
}

console.log(mascota2)

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}; 

guardarLocal("listaMascotas", JSON.stringify(mascots)); 

const mascotitas = JSON.parse(localStorage.getItem('guardarLocal')) || []

const listadeMascotas = () => {
    return new Promise ((resolve, reject)=>{
        resolve(mascots)
    })
}

let lealtad = document.getElementById("#siLeal");

const leal = (res) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
           res === true ? resolve("Si es cliente frecuente"): reject("No es cliente frecuente"), 2000 
        })
    })
}
 console.log(leal(true))
    leal(true)
        .then((resp)=>{
            console.log(resp)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Termino el proceso")
        })
 console.log(leal(false))
     leal(false)
        .then((resp)=>{
              console.log(resp)
        }) 
    .catch((error)=>{
     console.log(error)
         })
    .finally(()=>{
            console.log("Termino el proceso")
        })

  