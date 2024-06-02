import { useState } from "react";
import { registerUser } from "../api/workouts/register";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onSubmit = async(event) => {
        event.preventDefault()
        const response = await registerUser(name, email, password)
        if(response.success) {
            // localStorage.setItem("token", response.token)
            navigate("/login")
        }
       
    }
    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={onSubmit}>Submit</button>
        </div>

    )
}
export default Signup;