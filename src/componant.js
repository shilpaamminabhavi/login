import react, { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
const App = () =>{

    const[fullName, setFullName] =useState({
        fname : "",
        lname : "",
    });

    const inputEvent  = (event) =>{
        setFullName(event.target.value)
       console.log(event.target.value);
       console.log(event.target.name);
     
       const value = event.target.value;
       const name = event.target.value;

       setFullName((preValue) =>{

        if(name==='fName'){
            return{
                fname: value,
                lname: preValue.lname,
        };
           
        }else   if(name==='lName'){
            return{
                fname: value,
                lname: preValue.fname,
        };

       };
    });

    const onsubmit = (event) =>{
        alert("form submited")
      };
       
     
    return(
        <>
        <div>
            {/* <form onSubmit={onsubmit}> */}
            <h1> Hello {fullName.fname}{fullName.lname}</h1>

            <input type="text" placeholder='Enter your name' 
            name = "fname"
            onChange={inputEvent}
            value= {fullName.fname}
            />

             <input type="text" placeholder='Enter your password' 
             name = "lname"
             onChange={inputEvent} 
            //  value= {fullName.lname}
             />
            
            
            <button type="submit" onClick={onsubmit}>submit me</button>
        {/* </form>  */}
        </div>
        </>
    );   

    }
    //export default Componant;
