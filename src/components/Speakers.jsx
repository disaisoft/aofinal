import React from 'react';
import '../global.css';
import Cliente from '../images/CLIENTE-2.jpg';
import Cliente2 from '../images/CLIENTE-3---.jpg';
import Cliente3 from '../images/cliente-4--.jpg';
import Cliente4 from '../images/cliente-5--.jpg';



const Speakers = () => {
    return(
        <section id="conviertete-en-orador" className="pt-4 pb-3">
        <div className="container">
            <div className="row">
                <div className="col text-uppercase text-center">
                    <small >
                        Estos son algunos de nuestros
                    </small>
                    <h2>Testimonios</h2>
                </div>
            </div>
            <div className="container-fluid">

              <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Cliente} className="d-block carrusel_cursos" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Cliente2} className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Cliente3} className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Cliente4} className="d-block carrusel_cursos " alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
        </div>
    </section>
    );
}

export default Speakers;