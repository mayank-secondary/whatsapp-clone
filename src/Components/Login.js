import React from 'react';
import '../Styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../Configurations/firebase';
import { useStateValue } from '../Configurations/StateProvider';
import { actionTypes } from '../Configurations/Reducer';


function Login() {
    const context = useStateValue();
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result =>{
                context[1]({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(err => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt="img" />
                <div className="login__test">
                    <h1>Login to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
