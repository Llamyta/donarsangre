import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// Aca estan las importaciones de firabase
import widthFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEY4xmcmPwt33KqEFCRxLmv-rysBixwG0",
    authDomain: "donarsangre-b4de7.firebaseapp.com",
    databaseURL: "https://donarsangre-b4de7.firebaseio.com",
    projectId: "donarsangre-b4de7",
    storageBucket: "donarsangre-b4de7.appspot.com",
    messagingSenderId: "205506507424",
    appId: "1:205506507424:web:401e81a00c5031dac1cfc5",
    measurementId: "G-RFHCX24Y29"
});

class Login extends React.Component {

    render() {
        const {user, signOut, signInWidthGoogle} = this.props;        

        return (            
            <React.Fragment>
               <div>
                    {
                        user ?
                        <p>Hello, {user.displayName}</p>
                        : <p>Please, sign in</p>
                    }                    
                    {
                        user ? <button onClick = {signOut}>Sign out</button>
                        : <button onClick={signInWidthGoogle}>Sign in width Google</button>
                    }
                </div>
            </React.Fragment>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers ={
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};
export default widthFirebaseAuth({
    providers,
    firebaseAppAuth,    
})(Login);

