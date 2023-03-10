import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Periods from './componets/Periods'
import Rooms from './componets/Rooms'
import Top from './componets/Top';
function App() {
  
  return (
    <div className="mainPage">
     
   <Top/>
    <div className="dateContainar">

        <div className="startdate">
            <h3>
                DATE

            </h3> <input type="date" id="return"/>
        </div>
        <Periods/>



    </div>
    <div className="space "><button type="button" className=" checkrooms-btn btn-grad">Check for Rooms</button></div>
   
    <Rooms/>
    <div className="space low"><button type="button" className="btn-grad" id="Reserve">Reserve Room</button></div>

 </div>
  );
}

export default App;
