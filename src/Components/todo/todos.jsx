import {useState,useEffect} from "react" ; 
import { TodoInput } from './todoinput';
import { Todolist } from "./todoList";
export const Todos = ()=>{  

const [todos, setTodo] = useState([]); 
const [loading , setLoading] = useState(false); 
const [page , setPage] = useState(1);

   
useEffect(()=>{
    getData()
},[page]); 
 
const getData=()=>{ 
    setLoading(true)
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
    .then((d)=>d.json())
    .then((res)=>  {
      //console.log(res);
      setTodo(res) 
      setLoading(false)
    })
}
     
    const pagechange=(value)=>{
        setPage(page+value)
    }
     
    return loading ?("....Please run the server json-server db.json --port 3001 --watch") : (
        <div>
             <TodoInput  getData={getData}/>   
          
          {todos.map((item)=>{
            return(
                <Todolist key={item.id} title = {item.title} status = {item.status}/>
            )
        })} 
             <button onClick = {()=>pagechange(-1)}>prev</button>
             <button onClick = {()=>pagechange(1)}>Next</button>
        </div>
    )
}