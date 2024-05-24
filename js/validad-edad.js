export default function esMayorDeEdad(campo){
    const fechaNacimiento = new Date(campo.value)
   // console.log(fechaNacimiento)
   //validadEdad(fechaNacimiento);
   //console.log(validadEdad(fechaNacimiento));
   if(!validadEdad(fechaNacimiento)){
    campo.setCustomValidity("Necesitas ser mayor de edad")
   }
}

function validadEdad(fecha){
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18,fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual>= fechaMas18;
}