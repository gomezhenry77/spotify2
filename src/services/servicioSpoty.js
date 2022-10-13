import { servicioTOKEN } from "./servicioTOKEN.js"

export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/57ekbx9PSS4ORs5wTZMSYp/top-tracks?market=US"

    const TOKEN= await servicioTOKEN()
    
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    //fetch porque es función asíncrona, dentro de los parámetros tiene para dónde va (URI) y la petición. el await es para esperar la respuesta sin necesidad de .then
    //el primer await es preguntando si tiene datos
    let respuesta=await fetch(URI,PETICION)
    //verificando si lo que trae la respuesta está en json y toca esperar de nuevo la respuesta
    let datos=await respuesta.json()

    return datos

}