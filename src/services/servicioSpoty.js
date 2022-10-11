export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/57ekbx9PSS4ORs5wTZMSYp/top-tracks?market=US"

    const TOKEN="Bearer BQBf33zbKTalS_r8QO6shVQcH4b86gCUco5jyxEMDb599-tiUr81XnUVHmtOru6FvmlQL5SDZrYaVadRDhr8ZyjH_DLIcJs-OF8J4BWzbgWGvz-z8Bqp67EiBa4NrBSRkQuwaXmcPF28orBQeAico6OkPkBxYegUIZkr7gEHpnk_ce_ITkQNI9cMyI4wr10"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    //fetch porque es función asíncrona, dentro de los parámetros tiene para dónde va (URI) y la petición. el await es para esperar la respuesta sin necesidad de .then
    //el primer await es preguntando si tiene datos
    let respuesta = await fetch(URI,PETICION)
    //verificando si lo que trae la respuesta está en json y toca esperar de nuevo la respuesta
    let datos=await respuesta.json()

    return datos

}