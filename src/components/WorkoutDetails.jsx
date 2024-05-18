const WorkoutDetails = ({workout, workouts, setWorkouts}) => {

    const clickDelete = async() =>{
        const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`,{
            method: 'DELETE',
        })
        const json = response.json()

        if (response.ok){
            setWorkouts(workouts.filter((w)=> w._id !== workout._id))
        }
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