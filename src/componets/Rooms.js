import React from "react";
import Input from "./Input";
import Lable from "./Lable";

const Rooms = () => {
    let room = [];
    let rooms = [];
    for(let i=1;i<11;i++){
               room[i]=i; 
    }
    for(let j=11;j<21;j++){
        rooms[j]=j; 
}
  return (
    <div className="rooms">
      <div className="row1">
        {
         room.map((i) => 
          <div>
            <Input id={"T"+i} />
            <Lable data={"T"+i} for={"T"+i} />
          </div>
        )}
      </div>
      <div className="row2">
      {
         rooms.map((j) => 
          <div>
            <Input id={"T"+j} />
            <Lable data={"T"+j} for={"T"+j} />
          </div>
        )}

      </div>
      <div className="row1">



      {
         room.map((i) => 
          <div>
            <Input id={"S"+i} />
            <Lable data={"S"+i} for={"S"+i} />
          </div>
        )}
      </div>
      <div className="row2">

      {
         rooms.map((j) => 
          <div>
            <Input id={"S"+j} />
            <Lable data={"S"+j} for={"S"+j} />
          </div>
        )}

      </div>
      <div className="row1">
      {
         room.map((i) => 
          <div>
            <Input id={"F"+i} />
            <Lable data={"F"+i} for={"F"+i} />
          </div>
        )}
      </div>
      <div className="row2">
      {
         rooms.map((j) => 
          <div>
            <Input id={"F"+j} />
            <Lable data={"F"+j} for={"F"+j} />
          </div>
        )}
      </div>
      <div className="row1">
      {
         room.map((i) => 
          <div>
            <Input id={"G"+i} />
            <Lable data={"G"+i} for={"G"+i} />
          </div>
        )}
      </div>
      <div className="row2">
      {
         rooms.map((j) => 
          <div>
            <Input id={"G"+j} />
            <Lable data={"G"+j} for={"G"+j} />
          </div>
        )}
       </div>
    </div>
  );
};
Input.defaultProps = {
  name: "options",
  className: "btn-check room",
};
Lable.defaultProps = {
  className: "btn btn-secondary",
};
export default Rooms;
