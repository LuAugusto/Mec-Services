import styled from "styled-components";
import {darken} from 'polished';

export const Container = styled.div`

.btn-cancelar{
  width:100%;
  color:#fff;
  background:red;
  border:0;
}

.table{
  width: 100%;
  border-collapse: collapse;

}
  .selectClass{
      background: rgba(0,0,0,0.6);
      border:0;
      border-radius:4px;
      height:20px;
      color:#fff;
  }
  .thead{
    background: #efefef;
    text-align: left;
  }

  .table-responsive{
    overflow-x: auto;
  }

  th,td{
    font-size: .9rem;
    padding:  1rem 1rem;
    color: var(--color-dark);
  }

  td{
    font-size: .8rem;
  }
  tbody tr:nth-child(even){
    background: #f9fafc;
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
`