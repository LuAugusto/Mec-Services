import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`
  max-width:900px;
  margin: 50px auto;

    th, td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      background: rgba(0,0,0,0.1);
    }
    .thead{
      
        background-color: #0169b2;
        color: white;
  
    }
    button{
      margin: 5px 0 0;
      height:44px;
      font-weight:bold;
      background:none;
      color:#black;
      border:0;
      border-radius:4px;
      font-size:16px;
      cursor:pointer;
    }
    a{
      color: #fff;
      margin-top:15px;
      font-size:16px;
      opacity:0.8;
      text-decoration:none;

      &:hover{
        opacity:1;
      }
    }
    .cancel{
      background:none;
    }
    .cancel a{
      color:black;
    }
`;

export const Modal = styled.div`
z-index:1000;
width:200px;
height:140px;
position:absolute;
margin: 200px 300px;
background: #fff;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:1px solid rgba(0,0,0,0.6);
border-radius:10px;

.buttons{
  display:flex;
  justify-content:space-around;
  width:100%;
}
.bt1{
  background:rgba(0,0,0,0.2);
  border:1px solid rgba(0,0,0,0.2);
  border-radius:10px;
  padding:10px;
  
}
.bt2{
  background:rgba(0,0,0,0.2);
  border:1px solid rgba(0,0,0,0.2);
  border-radius:10px;
  padding:10px;
}
.textModal{
 padding-left:40px;
 padding-bottom:20px;
  
}
`