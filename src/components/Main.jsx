import React from 'react';
import Slider1 from '../images/consultoria.JPG';
import '../global.css';


const Main = () => {
    return(
        <main id="main">
        <div className="carousel carrusel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="Medellin 1"/>
                </div>
               
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>Urgencias Odontológicas 24 horas con cita previa</h1>
                                <p className="d-none d-md-block">En caso de urgencia que implique prótesis: contamos con laboratorio propio
                                Para procedimientos y toma de Radiografías en un sólo lugar.
                                </p>
                                <a href="tel:3015343777" className="btn btn-outline-light">Llamar - Opción 1 - 3015343777</a><br /><br />
                                <a href="tel:3002161403" className="btn btn-outline-light">Llamar - Opción 2 - 3002161403</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Main;