import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
 export  const getPendingRequests =  async(username) =>{
    const response =await  api.get(`/getallpendingrequests/${username}`);
    return response.data
 }