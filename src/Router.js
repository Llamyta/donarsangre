import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RequisitosComp from './components/Requisitos'
import InicioComp from './components/Inicio'
import Header from './components/Header'
import Footer from './components/Footer'
import Sfooter from './components/Sfooter'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={InicioComp} />
                    <Route exact path="/ruta-Inicio" component={InicioComp} />
                    {/**<Route exact path="/ruta-Requisitos" component={RequisitosComp} />
                    <Route exact path="/ruta-Registrarse" component={Registrarse} />
                    <Route exact path="/ruta-PuntosDonacion" component={PuntosDonacion} />
                    <Route exact path="/ruta-CampañasDonacion" component={CampañasDonacion} />
                    <Route exact path="/ruta-SolicitaDonaciones" component={SolicitaDonaciones} />
                    <Route exact path="/ruta-DoancionOyT" component={DoancionOyT} />
        <Route exact path="/ruta-Login" component={Login} />*/}

                </Switch>
                <Footer />
                <Sfooter />
            </BrowserRouter>
        );
    }
}
export default Router;

