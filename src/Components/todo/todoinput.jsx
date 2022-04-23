import { useState } from "react";

export const TodoInput=({getData})=>{ 
  const [list,setList] = useState(""); 
    
    return ( 
        <div>
           <input onChange={(e)=>{
                     setList(e.target.value)
            }} type= "text" placeholder="Add Item"/> 


            <button onClick = {()=>{ 
                 const data = {status : "false" , title : list}
                fetch("http://localhost:3001/todos",{
                      method : "POST",
                      body : JSON.stringify(data),
                      headers : {
                          "content-type" : "application/json"
                      }
                }).then(getData)
            }}>Add Iteam </button>
        </div>
    )
}