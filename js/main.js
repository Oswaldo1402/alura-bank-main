import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./validad-edad.js";
import {tiposError,mensajes} from "./customErrors.js"


const campoDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const listaRespuestas = {
        nombre:e.target.elements["nombre"].value,
        email:e.target.elements["email"].value,
        identificacion:e.target.elements["identificacion"].value,
        cuil:e.target.elements["cuil"].value,
        fecha_nacimiento:e.target.elements["fecha_nacimiento"].value
    }
    localStorage.setItem("registro",JSON.stringify(listaRespuestas))

    window.location.href= "./abrir-cuenta-form-2.html"
})


//console.log(campoDeFormulario);
campoDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
});

function verificarCampo(campo) {
    let mensaje = "";

    campo.setCustomValidity("")
    // console.log("cambio", campo.name);
    if (campo.name == "cuil" && campo.value.length >= 11) {
        esUnCuil(campo)
    }
    if (campo.name == "fecha_nacimiento" && campo.value != "") {
        esMayorDeEdad(campo)
    }
    //console.log(campo.validity);
    tiposError.forEach(error=>{
        if(campo.validity[error]){
            mensaje =mensajes[campo.name][error]
           // console.log(mensaje);
        }
    })

    const mensajeError= campo.parentNode.querySelector(".mensaje-error")
    const validadInputCheck = campo.checkValidity()
    if(!validadInputCheck){
        mensajeError.textContent = mensaje
    }else{
        mensajeError.textContent=""
    }

}