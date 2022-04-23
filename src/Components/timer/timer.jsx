import { Count } from "./count" ;
import {useState} from "react" ; 
  export const Timer =()=>{ 
  const [show , setShow] = useState(false);
      return(
          <div>
              {show?<Count/>:null}
              
              <button onClick={()=>{
                   setShow(!show);
              }}>{show?"Hide":"Show"}</button>
          </div>
      )
  }