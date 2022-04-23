import styled from "styled-components" ; 

 export const Flex = styled.div` 
       display : flex ; 
       justify-content : space-around;
       align-items : center ; 

       &>div{
        width : 200px ; 
        height : 200px ; 
        border : 1px solid red ; 
        background : ${({theam})=>theam==="light"?"coral":"teal"};
        color : ${({theam})=>theam==="light"?"teal":"coral"}
       }
    `

 