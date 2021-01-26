import styled from 'styled-components'

const AdoptModalStyled = styled.div`
  
  position: fixed;
  z-index: 9999;
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
  background:rgba(0, 0, 0, 0.4);

  header.adopt-modal{
    background:rgba(255, 255, 255);
    max-width: 550px;
    width: 70%;
    padding: 20px;
    border-radius: 8px;
    min-width: 200px;
  }
  header h1 {
    font-family:'Fredoka One';
    color: #1764c2; 
  }
  header img {
   width: 100%;
   height: 100%;
   max-height: 250px; 
   max-width: 600px;
  }
  div{
    display: flex;
    justify-content:space-between;
  }
  button.btn-closed{
    background: none;
    border: none;
    cursor: pointer;
    color:red;
    font-family: 'Fredoka One';
    font-size: 32px;
    padding-bottom: 10px;
  }
  button.btn-contat{
    padding: 6px;
    border-radius: 4px;
    font-size: 26px;
    font-family: 'Fredoka One';
    border: none;
    color: white;
    background: #1764c2;
    margin:8px 0;
    transition: 0.4s;
    cursor: pointer;
  }
  button.btn-contat:hover{
    margin: 0;
    padding:14px 6px;
  }
  ul li {
    font-size: 20px;
    font-family: Comfortaa;
    font-weight: bold;
    color: #303030;
    line-height: 1.5;
  }
`

export default AdoptModalStyled