import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class Sidenav extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="sidebar">
                    <SideNav
                        onSelect={(selected) => {
                            // Add your code here
                        }} className="color">
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="perfil">
                            <NavItem eventKey="perfil">
                                <NavIcon>
                                    <NavLink to="/info" style={{ textDecoration: 'none' }}><i className="fas fa-user" style={{ fontSize: '1.75em' }} /></NavLink>
                                </NavIcon>
                                <NavText>
                                <NavLink to="/info" style={{ textDecoration: 'none' }}>Perfil</NavLink>
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="donar">
                                <NavIcon>
                                  <i className="fas fa-hand-holding-heart" style={{ fontSize: '1.75em' }}></i>
                                </NavIcon>
                                <NavText>
                                    Donar
                             </NavText>
                                <NavItem eventKey="charts/linechart">
                                    <NavText>
                                        <NavLink to="/ruta-PuntosDonacion" style={{ color: '#2E2E2E',textDecoration: 'none' }}>Institucion</NavLink>
                                    
                             </NavText>
                                </NavItem>
                                <NavItem eventKey="charts/barchart">
                                    <NavText>
                                    <NavLink to="/ruta-CampañasDonacion" style={{ color: '#2E2E2E', textDecoration: 'none' }}>Campaña</NavLink>
                                        
                             </NavText>
                                </NavItem>
                            </NavItem>
                            <NavItem eventKey="citas">
                                <NavIcon>
                                <NavLink to="/mis-citas" style={{ textDecoration: 'none' }} ><i className="fas fa-calendar-check" style={{ fontSize: '1.75em' }} ></i></NavLink>
                                
                                </NavIcon>
                                <NavText>
                                <NavLink to="/mis-citas" style={{ textDecoration: 'none' }}>Citas</NavLink>
                            </NavText>
                            </NavItem>
                             <NavItem eventKey="cerrar">
                                <NavIcon>
                                <i className="fas fa-power-off" style={{ fontSize: '1.75em' }} ></i>
                                </NavIcon>
                                <NavText>
                                <NavLink to="/info" style={{ textDecoration: 'none' }}>Cerrar Sesion</NavLink>
                            </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>

            </React.Fragment>
        );
    }
}
export default Sidenav;

