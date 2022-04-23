   import {useEffect, useState} from "react" ; 
export const Count=()=>{
    const[timer , SetTimer] = useState(0);

     useEffect(()=>{
      const id = setInterval(()=>{
            SetTimer((prev)=>{ 
                 if(prev>=20){
                    clearInterval(id);
                     return 0 ; 
                 }
                return prev+1
            })
         },1000) 
          return ()=>{clearInterval(id)}  /////////// when component is un mount means <component/> goes to null after clicking button
    },[])                                   /// interval should be cleared when <component/> not showing in user interface..means when component is unmount or remove from the page
    
     return(
         <div>
             Count-Down : {timer}
         </div>
     )
}