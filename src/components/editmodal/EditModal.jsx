import React, { useContext, useState } from 'react';
import './EditModal.css';
import { updateWorkout } from '../../api/workouts/updateWorkout';
import { WorkoutContext } from '../../contexts/WorkoutContext';

const EditModal = ({ workout, onClose }) => {
    const [title, setTitle] = useState(workout.title)
    const [load, setLoad] = useState(workout.load)
    const [reps, setReps] = useState(workout.reps)
    const {fetchWorkoutData} = useContext(WorkoutContext)

    const onUpdate = async() => {
        try{
            const res = await updateWorkout(workout._id, title, load, reps)
            console.log(res)
        }catch(error){
            console.log(error)
        }finally{
            onClose()
            fetchWorkoutData()
            
        }


        
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <label>Excersize Title:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <label>Load (in kg):</label>
                <input
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                />

                <label>Number of Reps:</label>
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                />
                <button onClick={onUpdate}>Update</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EditModal;