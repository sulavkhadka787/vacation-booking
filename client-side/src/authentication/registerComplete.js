import React,{useEffect,useState} from 'react';
import {auth} from '../firebase/firebase';
import {toast} from 'react-toastify';

const RegisterComplete=({history})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        setEmail(window.localStorage.getItem('emailForRegistration'));
        console.log(window.location.href);
        console.log(window.localStorage.getItem("emailForRegistration"));
    },[]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //validation
        if(!email || !password){
            toast.error('Email and Password is required');
            return;
        }

        if(password.length<6){
            toast.error("Password must be at least 6 characters long");
            return;
        }

        try{
            const result=await auth.signInWithEmailLink(
                email,
                window.location.href
            );

            if(result.user.emailVerified){
                //remove user from local storage
                window.localStorage.removeItem("emailForRegistration");

                let user=auth.currentUser;
                // console.log('===USER==',user);
                await user.updatePassword(password);
                const idTokenResult=await user.getIdTokenResult();
                console.log('===TOKEN===',idTokenResult,"user==>",user);
                //redirect
                history.push('/');
            }
    
        }catch(error){
            toast.error(error.message);
        }
    }

    const completeRegistrationForm=()=>(
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} disabled/>
                </div>
                {/* <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={displayName} 
                        onChange={(e)=>setDisplayName(e.target.value)}
                        placeholder="Enter Username"    
                    />
                </div> */}
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        placeholder="Enter Password" 
                        autoFocus
                    />
                </div>
                {/* <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" />
                </div> */}
                <button>Complete Registration</button>
            </form>
    )

    return(
        <div>
            {completeRegistrationForm()}
        </div>
    );
}

export default RegisterComplete;