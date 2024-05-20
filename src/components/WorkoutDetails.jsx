import { useContext } from "react"
import { WorkoutContext } from "../contexts/WorkoutContext"

const WorkoutDetails = ({workout}) => {

    const {fetchWorkoutData} = useContext(WorkoutContext)

    const clickDelete = async() =>{
        const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
            method: 'DELETE',
        })
        fetchWorkoutData()
        const json = response.json()

    }

    return(
       <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong> {workout.load}</p>
        <p><strong>Reps: </strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={clickDelete}>Delete</span>

       </div>
    )
}
export default WorkoutDetails;