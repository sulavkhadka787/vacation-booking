import React,{useState} from 'react';
import {auth} from '../firebase/firebase.js';
import {toast} from 'react-toastify';


const Register=()=>{

    const [email,setEmail]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const config={
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp:true
        }

        await auth.sendSignInLinkToEmail(email,config)
        .then(()=>{
            toast.success(`Verification link is sent to ${email}, please click the link to complete registration`);
        //save user email in the local storage
            window.localStorage.setItem('emailForRegistration',email);
            setEmail("");
        })
        .catch((error)=>{
            console.log('ERRPR',error);
            toast.error(error.message);
        })
    }

    const registrationForm=()=>(
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                autoFocus
                />

            <button type="submit">Register /{email}</button>
        </form>
    )
    return(
        <div>
            <h4>Register Your Account</h4>
            {registrationForm()}
        </div>
    );
}

export default Register;