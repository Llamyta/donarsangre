import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidenav from './components/Sidenav'
import Informacionpersonal from './components/Informacionpersonal';

class RouterUsuario extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Sidenav />

                <Switch>
                    <Route exact path="/" component={Informacionpersonal} />
                    <Route exact path="/info" component={Informacionpersonal} />
                    <Route exact path="/donacion-persona" component={Informacionpersonal} />
                    <Route exact path="/donacion-inst" component={Informacionpersonal} />
                    <Route exact path="/mis-citas" component={Informacionpersonal} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default RouterUsuario;

