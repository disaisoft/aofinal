import React from 'react';
import Urgencias from '../images/URGENCIAS_ODONTOLOGICAS.jpg';
import Laboratorio from '../images/LABORATORIO.jpg';
import Horas from '../images/24HORAS.jpg';
import Estetica from '../images/ODONTOLOGIA_ESTETICA.jpg';
import Implantes from '../images/IMPLANTES_2.jpg';
import Periodoncia from '../images/PERIODONCIA.jpg';
import Cirugia from '../images/CIRUGIA_ORAL.jpg';
import Endodoncia from '../images/ENDODONCIA.jpg';
import Higiene from '../images/HIGIENE_ORAL.jpg';


const TeamSpeakers = () => {
    return(
        <section id="speakers" className="mt-4 mb-4">
        <div className="container">
            <div className="row">
                <div className="col text-center text-uppercase">
                    <small>Conoce todos</small>
                    <h2>Nuestros Servicios</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 ">
                    <div className="card text-center" >
                        <img src={Urgencias} className="card-img-top" alt="Urgencias" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                <span className="badge badge-warning">Urgencias</span>
                                <span className="badge badge-info">Odontológicas</span>
                            </div>
                            <h5 className="card-title mb-0">Urgencias Odontológicas</h5>
                            <p className="card-text">Dolor en los dientes, fracturas, sangrado de encías, abscesos, lesiones generadas por traumatismos.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Laboratorio} className="card-img-top" alt="Laboratorio" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Laboratorio</span>
                                    <span className="badge badge-info">Odontológico</span>
                            </div>
                            <h5 className="card-title mb-0">Laboratorio</h5>
                            <p className="card-text">Tenemos disponibilidad para realizar prótesis provisionales inmediatas en caso de urgencias, en el menor tiempo posible.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Horas} className="card-img-top" alt="24 Horas" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Disponibilidad 24 Horas</span>
                                    <span className="badge badge-info">Inmediata</span>
                                </div>
                            <h5 className="card-title mb-0">Disponibilidad 24 Horas</h5>
                            <p className="card-text">Atendemos su emergencia en el momento que usted lo necesita con sólo una llamada previa.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Estetica} className="card-img-top" alt="Estética" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                <span className="badge badge-warning">Odontología</span>
                                <span className="badge badge-info">Estética</span>
                            </div>
                            <h5 className="card-title mb-0 ">Odontología Estetica Natural</h5>
                            <p className="card-text">Nuestras técnicas de rehabilitación siempre estarán enfocadas hacia la estética natural.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Implantes} className="card-img-top" alt="Implantes" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Implantes</span>
                                    <span className="badge badge-info">Dentales</span>
                            </div>
                            <h5 className="card-title mb-0">Implantes Dentales</h5>
                            <p className="card-text">Solución para reemplazar un diente perdido. El tratamiento implica la introducción de un tornillo en el hueso, que sirve como base sólida para soportar el nuevo diente.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Periodoncia} className="card-img-top" alt="Periodoncia" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Periodoncia</span>
                                    <span className="badge badge-info">Rehabilitación</span>
                                </div>
                            <h5 className="card-title mb-0">Periodocia</h5>
                            <p className="card-text">Tratamos la rehabilitación de todos los tejidos afectados que soportan todos nuestros dientes.</p> 
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Cirugia} className="card-img-top" alt="Cirugía" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                <span className="badge badge-warning">Cirugía</span>
                                <span className="badge badge-info">Oral</span>
                            </div>
                            <h5 className="card-title mb-0 ">Cirugía Oral</h5>
                            <p className="card-text">Tratamiento quirúrgico enfocado en atender las enfermedades que se producen en la boca, los maxilares y sus tejidos.</p> 
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Endodoncia} className="card-img-top" alt="Endodoncia" />
                        <div className="card-body">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Endodoncia</span>
                                    <span className="badge badge-info">Oral</span>
                            </div>
                            <h5 className="card-title mb-0">Endodoncia</h5>
                            <p className="card-text">Procedimiento que trata los conductos o raíces del diente para eliminar caries profundas y así evitar la pérdida de las piezas dentales afectadas.</p> 
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card text-center" >
                        <img src={Higiene} className="card-img-top" alt="Higiene" />
                        <div className="card-body ">
                            <div className="badges mb-2">
                                    <span className="badge badge-warning">Higiene</span>
                                    <span className="badge badge-info">Oral</span>
                                </div>
                            <h5 className="card-title mb-0">Higiene Oral</h5>
                            <p className="card-text">Aunque tengas una excelente higiene dental, es común que con el tiempo tus dientes acumulen placa bacteriana, la cual forma el sarro o los cálculos.</p>
                            <a className="btn btn-danger " href="tel:3002161403">Llamar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
}

export default TeamSpeakers;