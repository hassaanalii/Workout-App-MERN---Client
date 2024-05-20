import { createContext, useState } from "react";
import { fetchWorkout } from "../api/workouts/getWorkouts";

export const WorkoutContext = createContext(null)

export const WorkoutProvider = (props) => {
    const [workouts, setWorkouts] = useState(null)
    const fetchWorkoutData = async() =>{
        try{
            const res = await fetchWorkout();
            console.log(res)
            setWorkouts(res)
            
        }catch(error){
            console.log(error)
        }

    }
    
    return (
        <WorkoutContext.Provider value={{workouts, setWorkouts, fetchWorkoutData}}>
            {props.children}
        </WorkoutContext.Provider>
    )
}