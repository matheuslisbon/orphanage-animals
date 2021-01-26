import styled from 'styled-components'

const PetShopStyled = styled.div`
  h1{
    font-family: 'Fredoka One';
    font-size: 46px;
    color: #1764c2; 
  }
  h2{
    font-size: 28px;
    font-family: 'Comfortaa';
  }
  p, li{
    font-family: 'Comfortaa';
  }
  button{
    border-radius: 12px;
    padding: 12px 6px;
    margin:8px;
    border: none;
    font-size: 20px;
    font-family: Fredoka One;
    color: #1764c2; 
    cursor: pointer;
    transition: 0.5s; 
    background: #fff;
  }
  button:hover{
    padding: 16px 8px;
    margin: 0;
    margin-top: 5px;
        font-size: 23px;
  }

  .home-page{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 60px;
    font-size: 18px;
  }
  header{
    display:flex;
    flex-direction:column;
    width: 90%;
    justify-content:center;
    padding: 30px;
    justify-content:space-between;
    background: #82d9d0cc;
    margin: 5px auto;
    border-radius: 16px;
  }

  section {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 50px;
    width: 96%;
    margin:50px auto;
  }
  section h1{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  section p {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 32px;
  }

  div.itens-grid{
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    row-gap: 35px;
  }

  ul.ul-grid{
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    border: 3px solid #82d9d0;
    margin: 10px;
    padding:25px;
    cursor:pointer;
  }
  button.btn-grid{
    color: #fff; 
    background: #1764c2;
  }
  ul.ul-grid:hover{
    border: 3px solid #1764c2;
  }
  .item-foto{
    height: 150px;
    width: 150px;
  }
  @media(max-width:900px){
    .home-page{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
    h1{
      font-size:32px;
    }
    h2{
    font-size: 24px;
    }
    article img{
      width: 100%;
      margin: 0 auto;
    }
    div.itens-grid{
      grid-template-columns: 1fr;
    }
    section p {
      font-size: 28px;
    }
  }

`
export default PetShopStyled