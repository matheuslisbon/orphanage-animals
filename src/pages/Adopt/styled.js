import styled from 'styled-components'

const AdoptStyled = styled.div`
div{
    display:flex;
  font-size: 1.2rem;
  font-family: Comfortaa;
}


  header.adopt{  
    display:flex;
    padding:60px;
    padding-top: 82px;
    flex-direction:column;
  }
  article{
    padding-top: 75px;
  }
  header.adopt h1{
    font-family:'Fredoka One';
    color: #1764c2;
    margin-bottom: 10px;
  }
  header.adopt p {
    line-height:1.5;
  }
  form{
    margin-top: 10px;
    background:#82D9D0;
    color:#1764c2cc;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    padding:20px;
    border-radius: 12px;
    box-shadow: 1px 1px 5px #1764c2cc;
  }

  form input{
    padding: 10px;
    border:none;
    border-radius: 6px;
    font-family:Comfortaa;
    font-weight:bold;
    color:#454545;
  } 
  form select{
    height: 40px;
    border:none;
    border-radius: 6px;
    font-weight: bold;
    color: #454545;
  }

  form button{
    margin-top: 19px;
    padding: 10px;
    border:none;
    border-radius: 6px;
    color: #1764c2cc;
    font-size: 18px; 
    background: white;
    font-weight: bold;
    font-family:'Fredoka One';
    cursor: pointer;
    transition: .5s;

  }
  form button:hover{  
    padding: 15px;
  }
  section.home-adopt{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 96%;
    margin: 0 auto;
  }
  section h1 {
    padding: 15px;
    background:#ffffff;
    border-radius: 12px;
    position:relative;
    z-index: 9;
    font-family:'Fredoka One';
    color: #1764c2cc;
    font-size: 28px;
    border: 2px solid #ddd;
  }
  section div.item{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: #f0f0f0;
    border-radius: 8px;
    margin-top: -27px;
    width:100%;
    padding-top: 40px;
    box-shadow: 0.5px 0.5px 2px #909090;
   margin-bottom: 30px;
  }

  div.grid-box{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width:100%;
    padding: 20px;

  }
  div.grid-box ul {
    border-radius: 6px;
    box-shadow: 0.5px 0.5px 2px #909090;
    background: #f9f9f9;
    padding: 10px;
    font-weight: bold;
    color: #707070;
    display: flex;
    flex-direction: column;
  }
  div.grid-box ul li{
    margin: 5px 0;   
    font-family: Roboto;
    font-weight: 300 ;
    color: #2266ff;     
    display:flex;
    align-items:center;
    font-size: 22px;
    
  }
  div.grid-box ul li h1{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-self:center;
    width:100%;
    align-items:center;
    background: #f5f5f6;
    color: #454545;
    border: 1px solid #dddddd;
    box-shadow: 0px 0px 3px 2px #dddddd;
    border-radius: 6px; 
  }

  div.grid-box ul li label {
    color:#505050;
    font-family:'Comfortaa';
    margin-left: 8px;
    font-weight: 400;
  }
  div.grid-box ul li > img {
    height:230px;
    align-self:center;
    width:100%;
    padding: 10px;
    margin:0 auto;
    border-radius: 8px;
    border: 1px solid #DDDDDD;
  }

  button.btn-adopt{
    border:none;
    color:white;
    font-weight:bold;
    font-family:'Fredoka One';
    padding: 4px;
    background: #1764c2cc;
    border-radius: 8px;
    font-size: 32px;
    margin: 5px 20%;
    cursor: pointer;
    transition: 0.3s;
  }
  button.btn-adopt:hover{
    padding: 9px;
    margin: 0px 20%;
  }

  @media(max-width:1200px){

    div.initial {
      display: flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
    article {
      padding: 0;
      margin-top: -15px;
    }
    article img {
      width: 500px;
    }
  }

  @media(max-width:850px){
    div.grid-box{
      grid-template-columns:1fr 1fr;
    }
    div {
      display: initial;
    }
    article img {
      width: 350px;
    }
  }
  @media(max-width:675px){
    div.grid-box{
      grid-template-columns: 1fr;
    }
  }

`

export default AdoptStyled