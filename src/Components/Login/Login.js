import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import Logo from '../../images/unnamed.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig);
    }



const Login = () => {
    const [user,setUser] = useState({})
    const [userId,setUserId] = useContext(UserContext);
    console.log(userId)
    const history = useHistory();
    const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user)
                setUserId(user)
                history.replace(from)
                console.log(user)
            }).catch((error) => {
               var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode)
            });
    }




    return (
        <div style={{}}>
            <div className='login' style={{border:'1px solid gray', marginTop:'20%', padding:'10%', margin:'20px', backgroundColor:'#343a40'}} >
            <h1> Hello {user.displayName}</h1>
            {/* <h1>{user.email}</h1> */}
            <button  style={{borderRadius:'50px', fontWeight:'bold'}} onClick={handleGoogleSignIn} > <img style={{width:'50px', borderRadius:'50px'}} src={Logo} alt=""/> Google Sign In</button>
        </div>
        </div>
    );
};

export default Login;