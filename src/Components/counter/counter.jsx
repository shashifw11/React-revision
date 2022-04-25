import { useState } from "react"
import "./counter.css"

export const Counter = ()=>{ 
     const [counter , setCounter] = useState(10) 
const myfun = (value)=>{
    setCounter((prev)=>{
         if(prev<=0){
             return 1
         }
          return prev + value ; 
    }) ;
   
    
}  


// if(counter === 20){
//     return (
//     <h1>Maximum limit Exceded</h1>
//     )
// }
    
    return (
        <div>
            <div className = "button">
            <div onClick={()=>myfun(-1)}>-</div>
            <div >{counter}</div>
            <div onClick={()=>myfun(1)}>+</div>
             </div>
            <h3>Counter value : {counter}</h3>
            {/* <p>{counter%2==0?"Even":"Odd"}</p> */}
        </div>
    )
}