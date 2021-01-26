import styled from 'styled-components'

const DoarStyled = styled.div`
section{
display:flex;
justify-content:space-between;
padding-top: 65px; 
width: 96%;
margin: 0 auto;  
}

article{
  padding-top: 96.4px;
}
header{
  padding: 15px; 
  display:flex;
  flex-direction:column;
  align-items:center;
  color: #454545;
  font-family: Comfortaa; 
  font-weight: 700;
}
div.intro-donate{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
  h1.into{
    margin-top:35px;
    font-size:46px;
    font-family:'Fredoka One';
  }
  h1{
    font-family:'Fredoka One';
    align-self:center;
    display:flex;
    justify-content:center;
    align-items:center;
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
  div form {
    min-width:350px;
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
  form select{
    height: 40px;
    border:none;
    border-radius: 6px;
    font-weight: bold;
    color: #454545;
    box-shadow: 2px 2px 10px #dddddd;
    border:0.8px solid #ddddddcc;
  }
  button{
    padding: 11px 20px;

    border-radius: 8px;
    margin: 0 10px;
    color: #454545;
    font-size: 18px;
    font-weight:bold;
    background: #f5f5f6;

    border: 1px solid #dddddd;
    box-shadow: 1px 1px 6px #ddddddcc;
    font-family: 'Fredoka One';
    cursor:pointer;
  }
  .content-donate  {
    font-family: Comfortaa;
    font-weight:bold;
  }
  .donate-money{
    margin-bottom: 20px;
  }
  @media(max-width:1050px){
    section {
      display: flex;
      flex-direction: column;
      align-items:center;
    }
    h1{
      font-size: 20px;
      padding: 10px;
    }
    p {
      font-size: 16px;
    }
    .intro-donate{
      margin-top: 16px;
    }
    article {
      margin: 0;
      padding: 0;
    }
    article img {
      width: 350px;
    }

  }
`
export default DoarStyled