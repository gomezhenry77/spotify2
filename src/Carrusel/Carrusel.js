export function Carrusel(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Therion%20integrantes.jpg?alt=media&token=2b74ef24-4244-4fc2-9956-bf51010d9813" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/therion%20vovin.jpg?alt=media&token=57c76ffb-19ec-4b7d-8b7a-4f66e3502b21" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Therion%20Secret%20of%20the%20runes.jpg?alt=media&token=2dca8e12-efd1-4eab-8289-ca848f83c007" className="d-block w-100" alt="..."/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
</div>
        </>
    )
}