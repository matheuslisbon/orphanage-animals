import styled from 'styled-components'

 const NavBarStyled = styled.div`
 color:#f5f5f6;
 position:fixed;
 width:100%;
 font-size: 22px;
  background: #F17171;
  display:flex;
  font-weight: 300;
  align-items:center;
  padding:5px 10px;
  padding-top:0;
  box-shadow: 0px 1px 9px #757575cc;

  justify-content:space-between;


  h1{
    font-size: 32px;
    font-family:cursive;

  }

  ul{
    display:flex;
  }
  ul li {

    margin:8px 14px;
    border-bottom:3.5px solid #713D99;
    cursor: pointer;

  }
`

export default NavBarStyled