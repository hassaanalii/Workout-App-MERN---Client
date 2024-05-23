export const loginUser = async (email, password) => {
    const details = {email, password};
       
    try {
        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(details),
            headers:{'Content-Type': 'application/json'},
            
        })
        const json = await response.json()

        if (response.ok) {
            return json;
        }
    }catch(error){
        throw error.messsage;
    }
    
}