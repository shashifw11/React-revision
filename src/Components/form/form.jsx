     import {useState} from "react" ;  
export const Form =()=>{
    const [formdata , setFormdata] = useState({
          UserName : "",
          Age : "",
          Email : "",
          Addresh : ""
    })
   
  const handleChange = (e)=>{ 
        const {name} = e.target ;
    setFormdata({...formdata,
          [name] : e.target.value,
    });
  }

   return(
    <form onSubmit={(e)=>{
         e.preventDefault()  
          console.log(formdata);
    }}>
      <input onChange = {handleChange} name = "UserName" type = "text" placeholder="Enter Name"/>
      <input onChange = {handleChange} name = "Age"  type = "number" placeholder="Enter Age"/>
      <input onChange = {handleChange} name = "Email" type = "email" placeholder="Enter Email"/>
      <input onChange = {handleChange} name = "Addresh" type = "text" placeholder="Enter Addresh"/>
      <input  type = "submit" value="submit"/>
 </form>
   )
 
}