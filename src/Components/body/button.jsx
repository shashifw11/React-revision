  import {useContext} from "react" ; 
  import {CartContext } from "../../context/cartContext";
  
 export const Button = ()=>{ 
      const {handleChange} = useContext(CartContext)
     return (
         <div>
             <button onClick={()=>{
                      handleChange(1)
             }}>Add to cart</button>
         </div>
     )
 }