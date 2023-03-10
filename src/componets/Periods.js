import React from 'react'
import Input from './Input'
import Lable from './Lable'


const Periods = () => {
  return (
    <div className="periods">
                    <div className="btn-group " role="group" aria-label="Basic radio toggle button group">

                        <Input className="btn-check table" name="btnradio" id="first" />
                        <Lable className="btn btn-outline-primary" for="first"  data="9:15AM - 10:15AM"/>
                        <Input className="btn-check table" name="btnradio" id="second"/>
                        <Lable className="btn btn-outline-primary" for="second" data="10:15AM - 11:15AM"/>
                        <Input className="btn-check table" name="btnradio" id="third"/>
                        <Lable className="btn btn-outline-primary" for="third" data="11:15AM - 12:15PM"/>
                        <Input className="btn-check table" name="btnradio" id="fourth"/>
                        <Lable className="btn btn-outline-primary" for="fourth" data="1:00PM - 2:00PM"/>
                        <Input className="btn-check table" name="btnradio" id="fifth"/>
                        <Lable className="btn btn-outline-primary" for="fifth" data="2:00PM - 3:00PM"/>
                        <Input className="btn-check table" name="btnradio" id="sixth"/>
                        <Lable className="btn btn-outline-primary" for="sixth" data="3:00PM - 4:00PM"/>

                    </div>
                </div>
  )
}

export default Periods
