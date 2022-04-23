//  export const Button = ()=>{
//      return(
//          <div>
//              <button>Add 1</button>
//          </div>
//      )
//  }  

import styled from "styled-components"; 

 export const Button = styled.button`
     width : 100px; 
     border : none ; 
      border-radius : 5px ; 
      padding : 5px ; 
      background : ${({theam})=>theam==="light"?"white":"teal"};
      color : ${({theam})=>theam==="light"?"teal":"white"};
      font-weight : bolder ; 
` 