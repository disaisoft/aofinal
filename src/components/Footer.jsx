import React, { Component } from "react";
import Logo from "../images/logo_alternativas_odontológicas-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../global.css';

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <img
                  src={Logo}
                  alt=""
                  className="img-fluid w-75 d-block ml-4 mb-4"
                />
                <p>
                  (034) 590-2558 <br />
                  (57) 301 534 3777 <br/>alternativasodontologicas@yahoo.es<br/> Calle 46 # 69-32 Sector Estadio<br/>
                  Segundo Piso, Cerca a la Estación Estadio del Metro.
                </p>
              </div>
              <div className="col-md-8 col-lg-8 text-center">
                <h3 className="mt-5">Nuestras redes sociales</h3>
                <div className="align-items-center mt-3">
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://www.instagram.com/alternativasodontologicas/"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                    <i className="insta fa fa-instagram fa-3x" aria-hidden="true"></i>
                  </a>
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://www.facebook.com/alternativasodontologicas/"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      size="4x"
                      className="p-2"
                      color="aqua"
                    />
                    <i className="face fa fa-facebook-official fa-3x" aria-hidden="true"></i><br /><br />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                      size="4x"
                      className="p-2"
                      color="red"
                    />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center bg-primary text-white">
          <div className="container py-3">
            <p>© 2021 Alternativas Odontologicas. Todos los derechos reservados</p>
          </div>          
        </div> 
        <div className="btn-whatsapp">
                <a href="https://api.whatsapp.com/send?phone=573015343777" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="" />
                </a>
            </div>
      </React.Fragment>
    );
  }
}

export default Footer;