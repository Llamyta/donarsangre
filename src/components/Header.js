import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/images/logp.PNG'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" className="App-header font-size" sticky="top">
                    <Navbar.Brand href="#home">
                        <div className="logo-header">
                            <img src={Logo} width="auto" height="60" className="d-inline-block align-top" alt="Logo" />

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <NavLink to="/ruta-Inicio" style={{ color: '#2E2E2E', textDecoration: 'none' }} activeClassName="activeHeader" className="headerElement">Inicio</NavLink>

                            <NavDropdown className="App headerElementr" title="Donar Sangre" id="collasible-nav-dropdown">
                                <NavLink to="/ruta-Requisitos" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Requisitos</NavLink> <br />
                                <NavLink to="/ruta-Registrarse" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Registrarse</NavLink><br />
                                <NavLink to="/ruta-PuntosDonacion" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Puntos de Donacion</NavLink><br />
                                <NavLink to="/ruta-CampañasDonacion" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Campañas de Donacion</NavLink><br />
                            </NavDropdown>
                            <NavLink to="/ruta-SolicitaDonaciones" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Solicitar Donaciones</NavLink>
                            <NavDropdown className=" App headerElementr" title="Donaciones" id="collasible-nav-dropdown">
                                <NavLink to="/ruta-DoancionOyT" style={{ color: '#2E2E2E', textDecoration: 'none' }} className="font-size headerElement">Organos y tejidos</NavLink>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;

