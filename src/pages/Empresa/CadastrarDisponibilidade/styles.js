import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`
  max-width:600px;
  margin: 50px auto;
  display:flex;
  flex-direction:row;
  align-items:center;
  
  .hourText{
    font-size:22px;
  }

  button{
    padding-left:10px;
    padding-right:10px;
  }

  form{
    display:flex;
    flex-direction:column;
    margin-top:30px;
    padding:20px;
    input{
      background: rgba(0,0,0,0.6);
      border:0;
      border-radius:4px;
      height:44px;
      padding:0 15px;
      color:#fff;
      margin:0 0 10px;

      &::placeholder{
        color:rgba(255,255,255,0.7);
      }
    }
    span{
      color:#F64c75;
      align-self:flex-start;
      margin: 0 0 10px;
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