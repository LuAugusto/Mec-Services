import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`
  max-width:600px;
  margin: 50px auto;
  
  hr{
    margin-top:20px;
    margin-bottom:20px;
  }

  select{
      background: rgba(0,0,0,0.6);
      border:0;
      border-radius:4px;
      height:24px;
      padding:0 15px;
      margin:0 0 25px;
      color:#fff;

      &::placeholder{
        color:rgba(255,255,255,0.7);
      }
  }

  form{
    display:flex;
    flex-direction:column;
    margin-top:5px;
    margin-bottom:10px;

    input{
      background: rgba(0,0,0,0.6);
      border:0;
      border-radius:4px;
      height:24px;
      padding:0 15px;
      color:#fff;
      text-transform: uppercase;
      
      &::placeholder{
        color:rgba(255,255,255,0.7);
      }
    }
    span{
      color:#F64c75;
      align-self:flex-start;
      font-weight: bold;
    }
    hr{
      border:0;
      height:1px;
      background:rgba(255,255,255,0.2);
      margin:10px 0 20px;
    }
    button{
      margin: 5px 0 0;
      height:44px;
      background:#0169b2;
      font-weight:bold;
      color:#fff;
      border:0;
      border-radius:4px;
      font-size:16px;
      transition: background 0.2s;

      &:hover{
        background: ${darken(0.03, '#0169b2')};
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
`;
export const But = styled.button`
    width:100%;
    margin: 10px 0 0;
    height:44px;
    background:#f64c75;
    font-weight:bold;
    color:#fff;
    border:0;
    border-radius:4px;
    font-size:16px;
    transition: background 0.2s;

    &:hover{
      background: ${darken(0.08, '#f64c75')};
    }
`;