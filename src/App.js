import React,{useState} from "react";

function App() {

  let Ctime= new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    let sec=new Date().toLocaleTimeString([],{
      second:"2-digit"
    })

  const[time,getTime]= useState(Ctime)
  const[seccond,setSecond]=useState(sec)

  function updateTime(){
    var Time=new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12:true

      })
      var Sec= new Date().toLocaleTimeString([],{
        second:"2-digit"
      })
    getTime(Time)
    setSecond(Sec)
  
    }
  setInterval(updateTime,1000)
    

  return (
    <div className="container">
      <div className="box">
        <h1>{time}</h1>
        <h3>{seccond}</h3>
      </div>
    </div>
  );
}

export default App;
