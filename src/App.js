import React,{useState} from "react";

function App() {

  let Ctime= new Date().toLocaleTimeString()

  const[time,getTime]= useState(Ctime)

  function updateTime(){
    getTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime,1000)

  return (
    <div className="container">
      <div className="box">
        <h1>{time}</h1>
      </div>
    </div>
  );
}

export default App;
