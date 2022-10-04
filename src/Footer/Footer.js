export function Footer(){
    return(
        <>
            <footer className="container-fluid bg-dark text-white p-3 mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-">
                        <h4>&copy; Henry Alexander Gomez Florez</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendiz SURA</h4>
                        <h4>2022</h4>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-self-center border-start justify-content-center">
                        <a href="https://www.linkedin.com/in/henrygomezflorez/">
                        <i className="bi bi-linkedin fs-1 text-white p-5"></i>
                        </a>
                        <a href="https://github.com/gomezhenry77">
                        <i className="bi bi-github fs-1 text-white p-5"></i>
                        </a>
                        <a href="https://www.facebook.com/henry.gomez.39545">
                        <i className="bi bi-facebook fs-1 text-white p-5"></i>
                        </a>
                        <a href="https://twitter.com/jacob_gomez739">
                        <i className="bi bi-twitter fs-1 text-white p-5"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}