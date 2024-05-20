export const updateWorkout = async(id, title, load, reps) => {
    const workout ={title, load, reps}
    try{
        const res = await fetch (`http://localhost:4000/api/workouts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await res.json()

        if (res.ok){
            return json;
        }
        
        
    }catch(error){
        throw error.message;
    }
}