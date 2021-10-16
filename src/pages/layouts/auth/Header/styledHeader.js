import styled from "styled-components";

export const HeaderCSS = styled.div`

.headerCss{
  left: 240px;
  top:0;
  z-index: 100;
  background: #fff;
  height: 60px;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  transition: left 500ms;
}
.headerCss .logo{
  color:#0169b2;
  animation: slide-left 0.5s linear forwards;
  animation-delay: 0.2;
}

`;