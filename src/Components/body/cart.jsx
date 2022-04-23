import {useContext} from "react" ; 
import {CartContext } from "../../context/cartContext";

 export const Cart = ()=>{
        
    const {count} = useContext(CartContext); 
         return (
             <div>
                 Cart : {count} 
             </div>
         )
 }