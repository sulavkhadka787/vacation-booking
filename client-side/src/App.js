import React from 'react';

const App=()=> {
  const toggle=()=>{
    let sidebar=document.getElementById("toggle-menu");
    sidebar.classList.toggle('active');
  }
  return (
    <div>
        
        <header className="l-header">
            <div className="toggle-menu" id="toggle-menu">
                <ul  className="tog__list">
                    <li className="tog_item"><a href="" className="tog__link">Login</a></li>
                    <li className="tog_item"><a href="" className="tog__link">Deals</a></li>
                    <li className="tog_item"><a href="" className="tog__link">Pacakages</a></li>
                    <li className="tog_item"><a href="" className="tog__link">Destinations</a></li>
                    <li className="tog_item"><a href="" className="tog__link">Activities</a></li>
                </ul>  
            </div>
           <nav className="nav bd-grid">
                <div className="logo-header">
                    <i className='fas fa-umbrella-beach' style={{fontSize:'48px',color:'rgb(9, 100, 143)'}}></i><span><i className="logo-s">S</i>hangri-La Travels</span>
                </div>
    
                <div className="nav_menu" id="nav-menu">
                            <ul  className="nav__list">
                                <li className="nav_item"><a href="" className="nav__link">Deals</a></li>
                                <li className="nav_item"><a href="" className="nav__link">Pacakages</a></li>
                                <li className="nav_item"><a href="" className="nav__link">Destinations</a></li>
                                <li className="nav_item"><a href="" className="nav__link">Activities</a></li>
                            </ul>  
                </div>
                <div>
                        <i  onClick={toggle}className="material-icons" style={{fontSize:'48px',color:'red'}} id="nav-toggle">apps</i>
                        <i className='fas fa-user-plus' style={{fontSize:'36px'}} id="login-id"></i>         
                </div>
                
            </nav>
        </header> 
        <main>
            <div>
                <img src="images/coverpic.jpeg" />
            </div>
            <div className="destination">
                <select>
                    <option>Select Your Vacation Destination</option>
                    <option>Everest Base Camp</option>
                    <option>Upper Mustang</option>
                    <option>Kathmandu Valley</option>
                    <option>Lumbini</option>
                </select>
                <div className="date-picker">
                    <label>Check-In</label><input type="date" className="date-pick" id="dp-1" />
                </div>
                
                <div className="date-picker">
                    <label>Check-Out</label><input type="date" className="date-pick" id="dp-2" />
                </div> 
            </div>
            
        </main>
    </div>
  );
}

export default App;
