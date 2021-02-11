import React from 'react';

const Main=()=>{
    return(
        <>
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
        </>
    );
}
export default Main;