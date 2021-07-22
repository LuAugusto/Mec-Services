import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`
  max-width:600px;
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
      background:#3b9eff;
      font-weight:bold;
      color:#fff;
      border:0;
      border-radius:4px;
      font-size:16px;
      transition: background 0.2s;

      &:hover{
        background: ${darken(0.03, '#3b9eff')};
      }
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
    .pen{
      background:none;
    }
    .edit{
      background:none;
    }
    .edit a{
      color:black;
    }
`;
