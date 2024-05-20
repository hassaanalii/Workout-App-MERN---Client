import { useContext, useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { fetchWorkout } from "../api/workouts/getWorkouts";
import { WorkoutContext } from "../contexts/WorkoutContext";

const Home = () =>{
    const {workouts, fetchWorkoutData} = useContext(WorkoutContext)
    
    useEffect(() => {
        fetchWorkoutData()
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
export default Home;