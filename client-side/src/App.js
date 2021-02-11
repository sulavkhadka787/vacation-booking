import React,{useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './authentication/login';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



import Register from './authentication/register';
import Home from './Home';
import RegisterComplete from './authentication/registerComplete';

import {auth} from './firebase/firebase';
import {useDispatch} from 'react-redux';

const App=()=> {

  const dispatch=useDispatch();

  //to check firebase auth state
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(async(user)=>{
      if(user){
        const idTokenResult=await user.getIdTokenResult();
        console.log("user",user);
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{
            name:user.email,
            token:idTokenResult.token
          }
        })

      }
    })
  })
  
  return (
      <>
      <ToastContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/register/complete" component={RegisterComplete} />
        </Switch>
      </>
    


  );
}

export default App;
