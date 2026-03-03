import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
export async function register(username,email,password){
try{
    const response = await api.post('api/auth/register',{
        username,
        email,
        password
    })
    return response.data;

}
catch(err){}
}
export async function login(username,password){
   try{
    const response = await api.post('api/auth/login',{
        username,
        password
    })
  return response.data;
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