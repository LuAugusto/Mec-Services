import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  max-width:600px;
  margin: 50px auto;

  form{
    display:flex;
    flex-direction:column;
    margin-top:30px;

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
  }
  
`;
