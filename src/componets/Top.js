import React from 'react'
import Input from './Input'
import Lable from './Lable'

function Top() {
  return (
    <div className="btnContainer">

    <Input  id="classroom" className="btn-check cls" name="option"/>
    <Lable  className="btn btn-secondary roomsbtn" for="classroom" data ="Class Rooms"/>
    <Input  id="Seminars" className="btn-check cls" name="option"/>
    <Lable  className="btn btn-secondary roomsbtn" for="Seminars" data ="Seminars"/>
    <Input  id="Labs" className="btn-check cls" name="option"/>
    <Lable  className="btn btn-secondary roomsbtn" for="Labs" data ="Labs"/>

    <a href="AO.html" className="goback" id="aobtn">
       Notifications
       <span className="badge bg-danger"></span>

    </a>


</div>
     
    )
}

export default Top
