import { useContext, useState } from "react"
import { WorkoutContext } from "../contexts/WorkoutContext"
import EditModal from "./editmodal/EditModal"

const WorkoutDetails = ({workout}) => {
    const [showModal, isModalShown] = useState(false)

    const {fetchWorkoutData} = useContext(WorkoutContext)

    const editClick = () =>{
        isModalShown(!showModal)
    }

    const close = () => {
        isModalShown(false)
    }
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
        <div className="flex gap-3">
        <p onClick={clickDelete}>Delete</p>
        <p onClick={editClick}>Edit</p>
        </div>
        {
            showModal && (
                <EditModal workout={workout} onClose={close} />
            )
        }

       </div>
    )
}
export default WorkoutDetails;