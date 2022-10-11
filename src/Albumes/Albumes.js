import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react";
export function Albumes(){

    //declarando mi primer useState
    //el primer elemento de estos corchetes es un get, que la use cuando vea a canciones y el set es para escribir o actualizar
    const[canciones,setCanciones]=useState(null)

    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)

    return(
        <>
        <h2>HOLA ME LLAMO ALBUMES Y SOY UN COMPONENTE</h2>
        </>
    )
}