 import {createContext} from "react"; 
 import {useState} from "react" ; 
 export const AuthContext = createContext() ; 
  

 export const AuthContextProvider = ({children})=>{
       const [isAuth , toggleAuth] = useState(localStorage.getItem("token")|| false)
            
       const handleChange =()=>{
        toggleAuth(!isAuth);
         } 

    return <AuthContext.Provider value = {{isAuth,handleChange}}>{children}</AuthContext.Provider>
 }
