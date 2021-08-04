import React from 'react';
import Place from '../images/Consultorio.png';

const PlaceDate = () => {
    return(
        <section id="place-time">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 pl-0 pr-0">
                    <img src={Place} alt="El Tesoro" />
                </div>
                <div className="col-12 col-lg-6 pt-4 pb-4 ">
                    <h4>Consultorio Odontológico Particular en Medellín</h4>
                    <p>Permítenos ayudarte a recuperar tu sonrisa.
                       Y disfruta la calidad de nuestros servicios odontológicos. 
                    </p>
                    <a className="btn btn-outline-light " href="https://www.google.com/maps/place/Urgencias+Particulares+Odontol%C3%B3gicas+-+Alternativas+Odontol%C3%B3gicas/@6.2514293,-75.5874914,15z/data=!4m2!3m1!1s0x0:0x982efcdb680189e9?sa=X&ved=2ahUKEwjqy8uSj5XyAhXpEVkFHSXXBn8Q_BIwE3oECFsQBQ">Encuentranos en Google Maps</a>
                </div>
            </div>
        </div>

    </section>
    );
}

export default PlaceDate;