import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
export const getPendingRequests = async () => {
  const response = await api.get("/api/users/getallpendingrequests");
  return response.data;
};

export const acceptRequest = async(username)=>{
    const response = await api.patch(`/api/users/acceptrequest/${username}`);
    return response.data;
}

export const rejectRequest = async (username)=>{
    const response = await api.patch(`/api/users/rejectrequest/${username}`);
    return response.data;
}