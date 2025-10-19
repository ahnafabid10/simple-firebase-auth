import React, { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
gitHubProvider.addScope('user:email');

const Login = () => {
    const [user, setUser] = useState(null);
    
    const handleGoogleSignIn = () => {
        console.log('google button clicked')
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
            const loggedInUser = result.user;
            if(!loggedInUser.email){
                if(loggedInUser.providerData){
                    const gitProvider = loggedInUser.providerData.find(p => p.providerId === 'github.com')
                    if(gitProvider && gitProvider.email){
                        loggedInUser.email = gitProvider.email;
                        
                    }
                }
            }
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('Sign Out Done')
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
        console.log(result.user)
        setUser(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                    <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                    <button onClick={handleGitHubSignIn}>Sign In With GitHub</button>
                    </>
            }
            {user && <div>
                <h3>Name: {user?.displayName}</h3>
                <h5>Email: {user.email}</h5>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;