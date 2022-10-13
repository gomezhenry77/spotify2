export async function servicioTOKEN(){
    
    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=41382de4a6824b74acd71411983874d0"
    const DATO3="client_id=2e22f98e63224e79bb6f00a0b5858b55"


    //petición
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body: DATO1+"&"+DATO2+"&"+DATO3
    }


    //fetch
    let respuesta=await fetch (URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;

    return datos

}