import './Home.css'
import {SubMenu} from '../SubMenu/SubMenu.js'
import {Footer} from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="Lacrimosa es una banda de metal gótico suizo/alemana, fundada en 1990 por Tilo Wolff (vocalista y principal compositor), e integrado desde el año 1994 por la cantante finlandesa Anne Marjanna Nurmi. Mezclan diversos estilos musicales tales como, neoclásismo, toques sinfónicos, uso de violines, trompetas y otros instrumentos orquestales (órgano, piano), entre otros instrumentos clásicos. Sus letras están escritas principalmente en alemán, aunque algunos de sus álbumes tienen contenido en inglés, castellano, ruso, latín y finés. Sus canciones versan sobre la soledad, la analogía del hombre con el autómata, la tristeza, la oscuridad, la desesperación, confusión, la felicidad, el anhelo, la desesperanza, la muerte y el amor"

    return(
        <>
        
        <div className="banner">
        </div>

        <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">LACRIMOSA</h1>
                        <p className='text-center'>{descripcionBanda}</p>
                    </div>

                </div>
        </div>
        
        <div>
        <SubMenu></SubMenu>
        </div>

        <div>
        <Footer></Footer>
        </div>

            
       
        

        

        </>
    )
}
