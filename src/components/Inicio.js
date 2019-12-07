import React from "react";
import Card from "./CardRND";
import Fondo from "../assets/images/d3.png";
import Imagen from "../assets/images/imagenseccionmotivos.png";
import Imagen2 from "../assets/images/imagenseccionmotivos2.png";
import Imagen3 from "../assets/images/imagenseccionmotivos3.png";
import Imagen4 from "../assets/images/imagenseccionmotivos4.png";
import Fondo2 from "../assets/images/recuperar.png";
import Logo from "../assets/images/imagen.png";

import { Container, Row, Col } from "react-bootstrap";

class Inicio extends React.Component {
  state = {
    cards: [
      {
        texto: "Llena tu informacion en el formulario de registro",
        img: Imagen
      },
      {
        texto: "Llena tu informacion en el formulario de registro",
        img: Imagen2
      },
      {
        texto: "Llena tu informacion en el formulario de registro",
        img: Imagen3
      },
      {
        texto: "Llena tu informacion en el formulario de registro",
        img: Imagen4
      }
    ]
  };

  
  render() {
      
    return (
      <React.Fragment>
        <div className="fondo">
          <div
            className="Component-Bg"
            style={{
              backgroundImage: "url(" + Fondo + ")",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "800px"
            }}
          >
            <div className="container" style={{paddingTop: "350px", paddingLeft:"100px"}}>
              <h1 style={{ color: "white",fontFamily:"learning curve", fontSize: "60px" }}><b>Donar Sangre</b></h1>
              <h1 style={{ color: "white",fontFamily:"learning curve", fontSize: "60px" }}>para <b>Salvar Vidas...</b></h1>
              <button className="btn btn-danger mt-3" >Quiero Donar</button>
            </div>
          </div>
        </div>

        <div className="seccion-inicio">
          <div className="Espaciados">
            <h3 style={{fontFamily:"learning curve", fontSize: "40px"}}>¿Por qué Donar Sange?</h3>
            <Container style={{ marginBottom: "8%" }}>
              <Row>
                {this.state.cards.map((cards, i) => {
                  return <Card key={i} cards={cards} />;
                })}
              </Row>
            </Container>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <div>
            <div className="fondo">
              <div
                className="Component-Bg"
                style={{
                  backgroundImage: "url(" + Fondo2 + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  height: "800px"
                }}
              >
                <Container>
                  <Row style={{ padding: "5% 0 5% 0" }}>
                    <Col xs={6} md={6}></Col>
                    <Col xs={12} md={6} style={{ padding: "0" }}>
                      <div className="Espaciados">
                        <h3 style={{fontFamily:"learning curve", fontSize: "40px"}}>Pasos para Donar Sangre</h3>
                      </div>
                      <img
                        src={Logo}
                        alt="..."
                        style={{ width: "auto", padding: "0 5% 0 5%" }}
                      ></img>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Inicio;
