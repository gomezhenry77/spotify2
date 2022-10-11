import { Footer } from "../Footer/Footer.js"

export function Musicos (){


    //un arreglo de objetos es formato común al consumir un api
    let musicos=[
        {
            nombre:"Tilo Wolff",
            rol:"Composición, Programación, teclados, piano, trompeta, guitarra",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Tilo%20Wolff.jpg?alt=media&token=e2a6178b-c2bc-4bec-a886-68a994e7b451",
        },
        {
            nombre:"Anne Nurmi",
            rol:"Teclados",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Anne%20Nurmi2.jpg?alt=media&token=d7953ccf-1686-40a7-8ce1-1e5e9450df61",
        },
        {
            nombre:"Tilo y Anne",
            rol:"Vocalistas",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosaVocalistas.png?alt=media&token=7b5dcc22-bb08-4d4c-ae2f-3e4228ffc421",
        }
    ]

    //5 conciertos memorables
    let conciertosMemorables=[
        {
            fecha:"2013",
            pais:"Colombia",
            descripcion:"Las segundas partes si pueden ser buenas, gratas y ¿por qué no? Hasta mejores, la banda que en su primer paso en Octubre del 2010 pareció quedar encantada con Bogotá y este era el momento de corroborarlo",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosa-en-colombia-2013-d.webp?alt=media&token=4e1712f5-2e63-4b8c-be0e-4001bb0ace40"
        },
        {
            fecha:"2013",
            pais:"Argentina",
            descripcion:"LA BANDA GÓTICA POR EXCELENCIA SE PRESENTÓ EN EL TEATRO DE COLEGIALES PARA FESTEJAR SUS MÁS DE 20 AÑOS DE CARRERA EN EL MARCO DEL REVOLUTION TOUR QUE TAMBIÉN LOS ESTA LLEVANDO POR EL RESTO DE LATINOAMERICA",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosa_buenos_aires-2013.webp?alt=media&token=34c66464-7254-4d7f-b8d4-9e62860f6698"
        },
        {
            fecha:"2001",
            pais:"USA",
            descripcion:"En realidad creía que era una banda de fama mundial, dado que la conocemos acá y es de origen europeo, pero en realidad sólo se consiguen imagenes de conciertos en latinoamerica como Yuri",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Lacrimosa%20New%20york%202001.webp?alt=media&token=517f6eea-d146-43a4-b254-c40c59bbb8e9"
        },

        {
            fecha:"1993",
            pais:"Deutschland",
            descripcion:"Aunque Alemania es la tierra natal de la banda y dieron un concierto en 1993, no se encuentran imágenes de estos conciertos todas son de conciertos por LATAM",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Lacrimosa%20Berlin%201993.jpg?alt=media&token=927054f0-4dda-4630-b6e4-3d0759f45418"
        }
    ]

    //mapeando un arreglo para hacer un render
    //todo lo que ponga dentro de llaves es javascript
    //un .map siempre devuelve
    return(
        <>
        
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center bg-dark h-100">

            {
            musicos.map(function(musico){
                return(
                    <>
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"></img>
                                <h1 className="text-center">{musico.nombre}</h1>
                                <h5 className="text-center">{musico.rol}</h5>
                            </div>
                        </div>
                    </>
                )
            })
            }



        </div>
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center bg-dark h-100 p-5">
            {
            conciertosMemorables.map(function(concierto){
                return(
                    <>
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={concierto.foto} className="img-fluid w-100"></img>
                                <h1 className="text-center">{concierto.pais}</h1>
                                <h3 className="text-center">{concierto.fecha}</h3>
                                <p className="text-center">{concierto.descripcion}</p>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
        <Footer className="position-absolute"></Footer>

        </>
        
    )

}