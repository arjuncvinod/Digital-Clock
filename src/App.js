import React,{useState} from "react";

function App() {

  let Ctime= new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })


  const[time,getTime]= useState(Ctime)

  function updateTime(){
    var Time=new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    getTime(Time)
  
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
