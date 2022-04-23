 import {Link} from "react-router-dom" ; 
 import "./navbar.css"
 export const Navbar = ()=>{
     return (
        <div className = "navbar" >
           <ul >
               <Link to = "todos"><li>Todos</li></Link>
               <Link to = "counter"><li>Counter</li></Link>
               <Link to = "timer"><li>Timer</li></Link>
               <Link to = "stopwatch"><li>StopWatch</li></Link>
               <Link to = "scroll"><li>Scroll</li></Link>
               <Link to = "form"><li>Form</li></Link>
               <Link to = "theam"><li>Theam</li></Link>
               <Link to = "cart"><li>Cart</li></Link>
               <Link to = "login"><li>Login</li></Link>
             </ul>
        </div>
     )
 }

  