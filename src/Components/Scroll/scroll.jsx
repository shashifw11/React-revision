    import {useRef} from "react" ; 
 export const Scroll = ()=>{ 
     const MyRef1 = useRef()
     const MyRef2 = useRef()
     const MyRef3 = useRef()
     const MyRef4 = useRef()
   
         return (
              <div>  
                    <button onClick={()=>{
                         console.log(MyRef1.current.scrollIntoView({behavior : "smooth"}))
                  }}>About</button>
                    <button onClick={()=>{
                         console.log(MyRef2.current.scrollIntoView({behavior : "smooth"}))
                  }}>contact</button>
                    <button onClick={()=>{
                         console.log(MyRef3.current.scrollIntoView({behavior : "smooth"}))
                  }}>personal</button>
                    <button onClick={()=>{
                         console.log(MyRef4.current.scrollIntoView({behavior : "smooth"}))
                  }}>experience</button>

                  
                  <div  ref = {MyRef1}
                 style = {{
                     height : "400px" , 
                     width : "350px", 
                     backgroundColor: "coral",
                     color : "white"
                 }}> About</div>

                 <div   
                      ref = {MyRef2}
                  style = {{
                     height : "400px" , 
                     width : "350px", 
                     backgroundColor : "teal",
                     color : "white"
                 }}>contact</div>

                 <div  
                          ref = {MyRef3}
                 style = {{
                     height : "400px" , 
                     width : "350px", 
                     backgroundColor: "gray",
                     color : "white"
                 }}>personal</div>  

<div   
                      ref = {MyRef4}
                  style = {{
                     height : "400px" , 
                     width : "350px", 
                     backgroundColor : "teal",
                     color : "white"
                 }}>experience</div>

               
                
              </div>
         )
}