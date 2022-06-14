import React, { useEffect } from 'react';
import './styles.css';
import { auth } from '../../firebase/config';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';



const Login = () => {
    

    const navigate = useNavigate();
    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth,provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            toast.error('Đăng nhập thất bại',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
        })
    }
    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((re) => {
            toast.success('Đăng nhập thành công',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            console.log(re);
        })
        .catch((err) => {
            toast.error('Đăng nhập thất bại',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            console.log(err.message);
        })
    }

    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth,provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            toast.error('Đăng nhập thất bại',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            console.log(err.message);
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/', {replace: true});
            }
        });
    })
    return (
        <div className="bg-login-box">
            <div className="login-box">
                <h2>Social Login</h2>
                <a href="#" className="social-button" id="facebook-connect" onClick={signInWithFacebook}> <span>Connect with Facebook</span></a>
                <a href="#" className="social-button" id="google-connect" onClick={signInWithGoogle}> <span>Connect with Google</span></a>
                <a href="#" className="social-button" id="github-connect" onClick={signInWithGithub}> <span>Connect with Github</span></a>
                <a href="#" className="social-button" id="phone-connect"> <span>Connect with Phone</span></a>
            </div>
        </div>
    );
}

export default Login;
