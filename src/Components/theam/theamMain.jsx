 import {Theam} from "./theam"
 import {Div} from "./div"
 import {useState} from "react" ; 
export const TheamMain = ()=>{
    const [theam , setTheam] = useState([]);

    const handleChange = (value)=>{
      setTheam(value)
    }
    return (
        <div>
     <Theam handleChange={handleChange}/>
      <Div theam = {theam}/> 
        </div>
    )
}