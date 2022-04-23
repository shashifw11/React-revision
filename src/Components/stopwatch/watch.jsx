// import {useState,useEffect} from "react" ; 
//   import {useRef} from "react" ; 

// export const Stopwatch = ()=>{
//      const [unit , setUnit] = useState(0) ;
//      const myref = useRef();
       
//     useEffect(()=>{
//      startTimer() 
      
//     },[])
     
//      const  startTimer = ()=>{
//         myref.current = setInterval(()=>{
//             setUnit((prev)=>
//                   prev + 1
//                )
//             },1000)
//        }
  

//     return (
//         <div>
//            <h1> Stop-watch : {unit}</h1> 

//            <button onClick = {()=>{
//                   clearInterval(myref.current);
//            }}>Paush</button>
           
//             <button onClick={()=>{
//                startTimer()
//             }}>start</button>

//             <button onClick={()=>{
//                  setUnit(0)
//                  clearInterval( myref.current)
//             }}>resat</button>
//         </div>
//     )
       
    
// }   
     import {useState,useEffect , useRef} from "react" ; 
       
  export const Stopwatch = ()=>{ 
      const [unit , setUnit] = useState(0) ; 
      const myRef = useRef() ; 
      useEffect(()=>{
         start();
      },[])  
      
       const start =()=>{
         myRef.current= setInterval(()=>{
            setUnit((prev)=>prev+1);
          },1000) 
       }
   


       return (
          <div>
             <h1>Stop-Watch:{unit}</h1>
             <button onClick = {()=>{
                  clearInterval(myRef.current)
             }}
             >Paush</button>
             <button  onClick = {()=>{
                start ()
             }}>Start</button>
             <button onClick = {()=>{  
                 setUnit(0)
                  clearInterval(myRef.current)
             }}>Resat</button>
          </div>
       )

  }