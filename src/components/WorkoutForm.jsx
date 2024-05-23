import { useContext, useState } from 'react'
import { WorkoutContext } from '../contexts/WorkoutContext'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [photo, setPhoto] = useState(null);
  const token = localStorage.getItem('token')
  const { fetchWorkoutData } = useContext(WorkoutContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const workout = {title, load, reps}

    // const response = await fetch('http://localhost:4000/api/workouts', {
    //   method: 'POST',
    //   body: JSON.stringify(workout),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // }
    // if (response.ok) {
    //   setError(null)
    //   setTitle('')
    //   setLoad('')
    //   setReps('')
    //   fetchWorkoutData()

    //   console.log('new workout added:', json)
    // }


    const formData = new FormData();
    formData.append('title', title);
    formData.append('load', load);
    formData.append('reps', reps);
    if (photo) {
      formData.append('photo', photo);
    }

    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      headers: { 
        authorization: 'Bearer ' + token
      },
      body: formData,

    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      setPhoto(null);
      fetchWorkoutData();
      console.log('new workout added:', json);
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

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

      <label>Photo:</label>
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm