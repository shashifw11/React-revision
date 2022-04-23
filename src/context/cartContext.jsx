 import { createContext , useState} from "react"; 

 export const CartContext = createContext() ;          /////////// storing box///////

export  const CartContextProvider = ({children})=>{ 
  
      const [count , setCount] = useState(0) ; 

       const handleChange = (value)=>{
        setCount(value + count)
       } 
      
      return <CartContext.Provider value = {{count,handleChange}}>{children}</CartContext.Provider>
 }