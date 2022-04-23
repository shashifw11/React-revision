import { useState } from "react"


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


if(counter === 20){
    return (
    <h1>Maximum limit Exceded</h1>
    )
}
    
    return (
        <div>
            <h3>Counter : {counter}<p>{counter%2==0?"Even":"Odd"}</p></h3>
            <button onClick={()=>myfun(-1)}>Sub1</button>
            <button onClick={()=>myfun(1)}>Add1</button>
           
        </div>
    )
}