export const fetchWorkout = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:4000/api/workouts',{
            headers:{'Content-Type': 'application/json',
            authorization: 'Bearer ' + token 
            },
             
        })
        const json = await response.json()

        if (response.ok) {
            return json;
        }
    }catch(error){
        throw error.messsage;
    }
    
}