import styled from 'styled-components'

const LoginStyled = styled.div`
  padding-top: 60px;
  display:flex;
  flex-direction:column;
  align-items:center;
  color: #454545;
  font-family: Comfortaa; 
  font-weight: 700;
  min-height: 100vh;
  h1.into{
    margin-top:35px;
    font-size:46px;
    font-family:'Fredoka One';
  }
  h1{
    font-family:'Fredoka One';
    align-self:center;
  }
  div{

    display: flex;
    justify-content:center;
    margin:0 auto;
    width: 80%;
  }
  div form {
    width: 60%;
    border:0.8px solid #ddddddcc;
    box-shadow: 1px 1px 7px #dddddd;
    border-radius: 8px;
    display:flex;
    flex-direction:column;
    padding:10px;
    margin-bottom: 30px;
  }
  div form label{
    font-size:22px;
  }
  div form input{
    padding: 10px;
    border:0.6px solid #dddddd;
    border-radius:8px;
    box-shadow: 2px 2px 10px #dddddd;
    font-family: Comfortaa;
    font-size: 16px;
    font-weight: bold;
  }
  div form button{
    padding: 10px;
    margin-top: 18px;
    border:none;
    font-size: 18px;
    font-family:'Fredoka One';
    margin-bottom: 12px; 
    box-shadow: 2px 2px 10px #dddddd;
    color: #454545;
    cursor: pointer;
  }
  .handleLogin{
    padding: 10px;
    border:none;
    cursor: pointer;
    margin-left: 10px;
    font-weight:bold;
    color: #606060;
    font-family:'Fredoka One';
  }
  p{
    font-size: 22px;
    margin-bottom: 25px;
    margin-top: 15px;
    align-content:center;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  select{
    font-family: 'Fredoka One';
    color:#606060;
    padding: 10px; 
    border:0.6px solid #dddddd;
    border-radius:8px;
    box-shadow: 2px 2px 10px #dddddd;
  }
  @media(max-width:700px){
    h1 {
      font-size: 20px;
      }
    h1.into{
    margin-top:35px;
    font-size:28px;
    font-family:'Fredoka One';
  }
  }
` 

export default LoginStyled