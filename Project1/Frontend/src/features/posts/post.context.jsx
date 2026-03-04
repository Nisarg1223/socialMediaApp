import { createContext,useState } from "react";

export const PostContext = createContext();


export const PostContextProvider = ({children})=>{
    const [loading,setloading] = useState(null);
    const [post,setpost] = useState(null);
    const [feed,setfeed] = useState(null)

    return (
        <PostContext.Provider value={{loading,setloading,post,setpost,feed,setfeed}}>
            {children}
        </PostContext.Provider>
    )
}