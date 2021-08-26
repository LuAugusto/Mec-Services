import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`
  max-width:600px;
  margin: 50px auto;
  display:flex;
  justify-content: space-around;
  align-items:center;

  a{
    color:black;
    text-decoration:none;
  }

  .card {
    width:200px;
    margin:20px;
    padding:30px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction:column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .contain {
    padding: 2px 16px;
  }
`