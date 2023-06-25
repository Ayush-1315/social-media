import axios from "axios"

export const getUserPosts=async(username)=>{
    try {
        const response=await axios.get(`/api/posts/user/${username}`);
        return response;
    }
    catch (e){
        return e;
    }
}
export const getAllPosts=async()=>{
    try{
        const response=await axios.get('/api/posts');
        return response;
    }
    catch(e){
        return e;
    }
}
export const createPostService=async(postData,token)=>{
    try{
        const response =await axios.post("/api/posts",
        {postData},
        {
            headers:{
                authorization:token
            }
        });
        return response;
    }
    catch(e){
        console.log(e);
        return e
    }
}