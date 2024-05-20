export const fetchWorkout = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/workouts')
        const json = await response.json()

        if (response.ok) {
            return json;
        }
    }catch(error){
        throw error.messsage;
    }
    
}