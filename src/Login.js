import React, { useState } from 'react';


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
      
    }
    

    return(
        <form>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com"  id="email" name="email"/>
            <label for="password">password</label>
            <input  value={password} type="password" placeholder="********"  id="password" name="password"/>
            <button>Log In</button>
            
        </form>
    )
}