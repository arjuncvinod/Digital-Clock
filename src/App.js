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
    <h1>{time}</h1>
    </div>
  );
}

export default App;
