import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
export async function getMyProfile(){
   const res = await api.get('/api/users/profile')
  console.log(res.data);
  return res.data;
}