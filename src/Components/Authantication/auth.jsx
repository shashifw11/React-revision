 import {useContext} from "react" ; 
import { AuthContext } from "../../context/authContext"; 
import axios from "axios" ; 
import {useState} from "react" ; 
export const Auth = () =>{
      const {isAuth,handleChange} = useContext(AuthContext)
           console.log(isAuth);
const myfun = ()=>{  

     if(isAuth===true){     /// for each login click isAuth become true then it must be to clear token from  local storage because after logout we dont have token in local storage and again we fetch token and store it local storage
         localStorage.clear("token") ;  
         handleChange()  //////// it means again isAuth == false
         return ; 
     }
   axios.post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then((res) => {
       // setToken(res.data.token)
    localStorage.setItem("token",res.data.token)
     handleChange() ;   //////isAuth == true
    })
}

    return (
        <div>
            <button onClick={myfun}>{isAuth?"logout":"login"}</button>

        </div>
    )
}