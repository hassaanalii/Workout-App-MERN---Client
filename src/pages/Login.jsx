import { useState } from "react";
import { loginUser } from "../api/workouts/login";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onSubmit = async(event) => {
        event.preventDefault()
        const response = await loginUser(email, password) 
        console.log(response)
        localStorage.setItem("token", response.token)
        navigate("/")


    }

    return (
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <label>Password</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default Login;