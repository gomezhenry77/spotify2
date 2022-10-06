import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'

import { useEffect } from "react";

export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Tilo%20Wolff.jpg?alt=media&token=e2a6178b-c2bc-4bec-a886-68a994e7b451" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInLeft" data-bs-toggle="collapse"             data-bs-target="#artista1">
            </img>

                </div>
                <div className="col-12 col-md-4 align-self-center border-start ms-5">
                    <h2>Tilo Wolff</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista1">
                <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>





            <div className="row my-5 justify-content-center">

                 <div className="col-12 col-md-4 align-self-center border-end ms-5">
                    <h2>Anne Nurmi</h2>
                    <h3>Tecladista</h3>
                </div>

                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Anne%20Nurmi.jpg?alt=media&token=3be2e490-ab45-4230-bc1c-b63008c7cb40" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInRight" data-bs-toggle="collapse"             data-bs-target="#artista2">
                </img>
                </div>


            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista2">
                <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>


            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Lacrimosa.jpg?alt=media&token=6d8b9018-c5fc-4eaf-b343-fc3f67969923" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInLeft" data-bs-toggle="collapse"             data-bs-target="#artista3">
            </img>

                </div>
                <div className="col-12 col-md-4 align-self-center border-start ms-5">
                    <h2>Pareja Lacrimosa</h2>
                    <h3>Compositores</h3>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista3">
                <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

            
            
        </>
    )
}
