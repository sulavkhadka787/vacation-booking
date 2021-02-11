import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Nav=()=>{
    const toggle=()=>{
        let sidebar=document.getElementById("toggle-menu");
        sidebar.classList.toggle('active');
      }

      let dispatch=useDispatch();
      let history=useHistory();

      const logout=()=>{
          firebase.auth().signOut();
          dispatch({
              type:'LOGOUT',
              payload:null
          })
          history.push("/login");
      }
    return(
        <>
      
        <header className="l-header">
            <div className="toggle-menu" id="toggle-menu">
                <ul  className="tog__list">
                    <li className="tog_item"><Link to="" className="tog__link">Login</Link></li>
                    <li className="tog_item"><Link to="" className="tog__link">Deals</Link></li>
                    <li className="tog_item"><Link to="" className="tog__link">Pacakages</Link></li>
                    <li className="tog_item"><Link to="" className="tog__link">Destinations</Link></li>
                    <li className="tog_item"><Link to="" className="tog__link">Activities</Link></li>
                </ul>  
            </div>
           <nav className="nav bd-grid">
                <div className="logo-header">
                    <i className='fas fa-umbrella-beach' style={{fontSize:'48px',color:'rgb(9, 100, 143)'}}></i><span><i className="logo-s">S</i>hangri-La Travels</span>
                </div>
    
                <div className="nav_menu" id="nav-menu">
                            <ul  className="nav__list">
                                <li className="nav_item"><Link to="" className="nav__link">Deals</Link></li>
                                <li className="nav_item"><Link to="" className="nav__link">Pacakages</Link></li>
                                <li className="nav_item"><Link to="" className="nav__link">Destinations</Link></li>
                                <li className="nav_item"><Link to="" className="nav__link" onClick={logout}>Activities</Link></li>
                            </ul>  
                </div>
                <div>
                        <i  onClick={toggle}className="material-icons" style={{fontSize:'48px',color:'red'}} id="nav-toggle">apps</i>
                        <i className='fas fa-user-plus' style={{fontSize:'36px'}} id="login-id" ></i>         
                </div>
                
            </nav>
        </header> 
        </>
    );
}

export default Nav;