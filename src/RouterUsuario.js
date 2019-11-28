import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidenav from './components/Sidenav'

import Informacionpersonal from './components/Informacionpersonal';
import CampañasDonacion from './components/CampañasDonacion'
import PuntosDonacion from './components/PuntosDonacion'
import Citas from './components/Citas'

class RouterUsuario extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Sidenav />

                <Switch>
                    <Route exact path="/" component={Informacionpersonal} />
                    <Route exact path="/info" component={Informacionpersonal} />
                    <Route exact path="/ruta-CampañasDonacion" component={CampañasDonacion} />
                    <Route exact path="/ruta-PuntosDonacion" component={PuntosDonacion} />
                    <Route exact path="/mis-citas" component={Citas} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default RouterUsuario;

