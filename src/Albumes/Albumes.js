import { servicioSpoty } from "../services/servicioSpoty.js"

//useState sirve para almacenar variables gloables y useEffect para determinar cuántas veces se repite algo
import { useState, useEffect } from "react";
import { servicioTOKEN } from "../services/servicioTOKEN.js"

export function Albumes(){

    //declarando mi primer useState
    //el primer elemento de estos corchetes es un get, que la use cuando vea a canciones y el set es para escribir o actualizar
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpoty()
        .then(function(respuesta){
        setCanciones(respuesta.tracks)
        setCarga(false)
    })
    console.log(canciones)
    },[])

    if (carga==true) {
        return(
            <>
            <h1>Estoy cargando...</h1>
            </>
        )

    } else {
        return(
            
            <div className="row row-cols-1 row-cols-md-5 g-3 justify-content-center bg-danger h-100">
                {
                    canciones.map(function(canciones){
                    return(
                        <>

                            <div className="col mt-3">
                            <div className="card h-100">
                                <img src={canciones.album.images[0].url} className="img-fluid w-100 h-100" alt="foto"></img>
                                <audio src={canciones.preview_url} className="w-100" controls="controls"></audio>
                                <h1 className="text-center">{canciones.name}</h1>
                            </div>
                            </div>
                        </>
                    )
                    })
                }
            </div>
            
        )
    }



}