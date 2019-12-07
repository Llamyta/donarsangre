import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Container,
  Form
} from "react-bootstrap";
import Logo from "../assets/images/dona sangre.png";
import { NavLink } from "react-router-dom";
import Login from './Login';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
  componentDidMount() {
    const menu = document.getElementById("menu1");
    // const altura = menu.offsetTop;
    const altura = 150;
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > altura) {
        menu.classList.add("color-nav");
      } else {
        menu.classList.remove("color-nav");
        menu.classList.add("color-nav2");
      }
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="App-header font-size grilla"
          sticky="top"
          style={{ position: "fixed" }}
          id="menu1"
        >
          <Navbar.Brand href="#home">
            <div className="logo-header">
              <img
                src={Logo}
                width="auto"
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavLink
                to="/ruta-Inicio"
                style={{ color: "#2E2E2E", textDecoration: "none" }}
                activeClassName="activeHeader"
                className="headerElement"
              >
                Inicio
              </NavLink>

              <NavDropdown
                className="App headerElementr"
                title="Donar Sangre"
                id="collasible-nav-dropdown"
              >
                <NavLink
                  to="/ruta-Requisitos"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                  className="font-size headerElement"
                >
                  Requisitos
                </NavLink>{" "}
                <br />
                <NavLink
                  to="/ruta-Registrarse"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                  className="font-size headerElement"
                >
                  Registrarse
                </NavLink>
                <br />
                <NavLink
                  to="/ruta-PuntosDonacion"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                  className="font-size headerElement"
                >
                  Puntos de Donacion
                </NavLink>
                <br />
                <NavLink
                  to="/ruta-CampañasDonacion"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                  className="font-size headerElement"
                >
                  Campañas de Donacion
                </NavLink>
                <br />
              </NavDropdown>
              <NavLink
                to="/ruta-SolicitaDonaciones"
                style={{ color: "#2E2E2E", textDecoration: "none" }}
                className="font-size headerElement"
              >
                Solicitar Donaciones
              </NavLink>
              <NavDropdown
                className=" App headerElementr"
                title="Donaciones"
                id="collasible-nav-dropdown"
              >
                <NavLink
                  to="/ruta-DoancionOyT"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                  className="font-size headerElement"
                >
                  Organos y tejidos
                </NavLink>
              </NavDropdown>
              <Nav.Link
                onClick={this.handleShow}
                style={{ color: "#2E2E2E", textDecoration: "none" }}
                className="font-size headerElement"
              >
                Iniciar Sesion
              </Nav.Link>

              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Iniciar Sesion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <div className="App-Formulario">
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>

                        <div
                          style={{ textAlign: "center", paddingTop: "40px" }}
                        >
                          <Button
                            variant="secondary"
                            type="submit"
                            className="boton"
                          >
                            Iniciar
                          </Button>
                          
                          
                        </div>
                      </Form>
                    </div>
                  </Container>
                </Modal.Body>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </React.Fragment>
    );
  }
}
export default Header;
