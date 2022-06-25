import React, { useState } from "react";

const App = () => {

    const [num, setNum]= useState(0)

    const incNum = () =>{
        setNum(num+1);
    }

    const decNum = () =>{
        if(0<num){
        setNum(num-1);
         } else{
             alert("sorry, zero limit reached")
             setNum(0);
         }
    }
    return(
        <>
        <div className="main_box">
            <div className="sec_box">
                <h1> {num} </h1>
                <div className="btn_div">
                <button onClick={incNum}> Increm </button>
                 <button onClick={decNum}> Decrem </button>
                </div>
                </div>
        </div>
        </>
    )
}

export default App;