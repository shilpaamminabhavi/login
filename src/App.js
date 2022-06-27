import React, { useState } from "react";

const App = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const[allEntry, setallEntry] = useState([]);

    const submitform = (e) => {

        e.preventDefault();

        const newEntry = {email:email, password:password};

        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

     return(
        <>
        <form action="" onSubmit={submitform}>
        <h1>LogIn</h1>
        <div>
        
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email"
             value={email} onChange={(e) => setEmail(e.target.value)} />
            
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter Your Password"  
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={() => window.location = 'https://shilpaamminabhavi.github.io/project/'}>LogIn</button>
        </form>
        </>
    )
}

export default App;