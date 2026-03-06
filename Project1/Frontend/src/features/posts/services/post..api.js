import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

export async function getFeed(){
    const response = await api.get('/api/posts/feed');
   
    return response.data
}
export async function createPost(imageFile,caption){

const formData = new FormData()

formData.append('image',imageFile)
formData.append('caption',caption)

    const response = await api.post('/api/posts',formData)

    return response.data
}

export async function likePost(postId){
    const response = await api.post(`/api/posts/like/${postId}`)
    return response.data
}
export async function unlikePost(postId){
    const response = await api.post(`/api/posts/unlike/${postId}`)
    return response.data
}
export async function followUser(username){
    const response = api.post(`/api/users/follow/${username}`);
    return response.data
}
export async function unfollowUser(username){
    const response = api.post(`/api/users/unfollow/${username}`);
    return response.data
}