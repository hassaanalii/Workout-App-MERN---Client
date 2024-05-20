// export const updateWorkout = async(id, title, load, reps) => {
//     const workout ={title, load, reps}
//     try{
//         const res = await fetch (`http://localhost:4000/api/workouts/${id}`, {
//             method: 'PATCH',
//             body: JSON.stringify(workout),
//             headers: {
//                 'Content-Type': 'application/json'
//             }

//         })
//         const json = await res.json()

//         if (res.ok){
//             return json;
//         }
        
        
//     }catch(error){
//         throw error.message;
//     }
// }


export const updateWorkout = async (id, title, load, reps, photo) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('load', load);
    formData.append('reps', reps);
    if (photo) {
        formData.append('photo', photo);
    }

    try {
        const res = await fetch(`http://localhost:4000/api/workouts/${id}`, {
            method: 'PATCH',
            body: formData,
        });
        const json = await res.json();

        if (res.ok) {
            return json;
        } else {
            throw new Error(json.error);
        }
    } catch (error) {
        throw error.message;
    }
};
