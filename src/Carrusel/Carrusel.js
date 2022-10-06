export function Carrusel(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Lacrimosa%20live.jpg?alt=media&token=bb2a208e-0c20-4e71-9aa8-ffdc3203024e" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosa%20wallpaper2.jpg?alt=media&token=db5ab254-1a9f-4e3a-b5b8-57106146059f" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosa%20wallpaper3.jpg?alt=media&token=8ebafa67-ce4d-466b-a1e1-8ad9b474521f" className="d-block w-100" alt="..."/>
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