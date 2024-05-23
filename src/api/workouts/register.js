export const registerUser = async (name, email, password) => {
    const details = {name, email, password};
    try {
        const response = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()

        if (response.ok) {
            return json;
        }
    }catch(error){
        throw error.messsage;
    }
    
}