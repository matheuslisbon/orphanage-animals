import styled from 'styled-components'

 const NavBarStyled = styled.div`
 
  div.itens-navbar{
    position:fixed;
    top:0;
    z-index: 999;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items:center;  
    background: #82D9D0;
    font-family: Comfortaa;
    font-weight: 500; 
    padding: 5px;
    box-shadow: 0 0 10px 1px #82D9D0;
  }
  h1{
    font-family: 'Fredoka One';
    color: #1764C2;
  }

  ul.itens-nav{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  ul.itens-nav .itens-navbar{
    color: #1764C2;
    margin:0 10px;
    padding:0 2px; 
    font-size: 23px;
    font-weight:bold;
    border-bottom: 3px solid #F5F5F6;
  }
  .itens-navbar-icon{
    margin:0 15px;
    cursor: pointer;
  }
  .nav-responsive{
    display:none;
  }
  .notActive{
    display:none;
  }
  ul li {
    font-size: 20px;
  }

  @media(max-width:800px){
    ul.not-responsive{
      display:none;
    }
    .nav-responsive{
      display: initial;
    }
    .itens-navbar-icon{
      margin: 0 5px;
    }
    h1{
      font-size: 20px;
    }
  }

`

export default NavBarStyled