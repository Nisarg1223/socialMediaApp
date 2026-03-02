import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3000/api/auth',
    withCredentials:true
})
export async function register(username,email,password){
try{
    const response = await api.post('/register',{
        username,
        email,
        password
    })
}
catch(err){}
}
export async function login(email,password){
   try{
    const response = await api.post('/login',{
        email,
        password
    })
   }
   catch(err){}
}

export async function getMe(){
    try{
        const response = await api.get('/get-me')
        return response.data
    }
    catch(err){
        throw err
    }
}