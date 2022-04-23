//// when we click the button its change the theam of component//
    import {useState} from "react" ; 
import { Button } from "./button";

export const Theam = ({handleChange})=>{
    const [theam, setTheam] = useState("light"); 
    handleChange(theam);
    return (
        <div>
           
           <Button theam = {theam}>Click ME</Button>
            <button onClick={()=>{
                setTheam(theam==="light"?"dark":"light") 
                
            }}>Change Theam</button>
        </div>
    )
}