import styled from 'styled-components'

const ProfileDiv = styled.div`

header{
  padding: 64px 0;
color: #454545;
font-size: 22px;
display: grid;
grid-template-columns:1.5fr 2fr;
}
  div{
    width: 80%;
    margin: 10px auto;
    margin-top: 25px;
    background: #82D9D0;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  div h1{
    font-family: 'Fredoka One';
    display:flex;
    margin-top: 5px;
    font-size: 42px;
    justify-content:center;
  }
  ul {
    display: flex;
    align-items:center;
    flex-direction:column;
  }
  div p{
    font-family: 'Fredoka One';
    font-size: 26px;

  }
  div ul li {
    margin: 15px 0;
  }
  div label{
    font-family: Comfortaa;

    border-bottom: 3px solid #f5f5f6;
  }

  section{
      font-family: 'Fredoka One';
      display: flex;
      align-items:center;
      flex-direction: column;
      margin-top: 35px;
    }
    section h2{
      font-size: 48px;
    }
    button{
      padding: 8px 18px;

      border-radius: 8px;
      font-family: 'Fredoka One';
      color: #fff; 
      transition: 0.5s;
      cursor: pointer;
      background: #336699cc;
      border: 3px solid #606060;
      font-size: 18px;

    }
  @media(max-width:1000px){

    header{
      display: flex;
      flex-direction: column;
    }

    div ul {
      display:flex;
      flex-direction:column;
      align-items:center;
      width:100%;
      margin: 0 auto;
    }
    section {
      width: 80%;
      margin:0 auto;
      margin-top: 25px;
    }
    section img{
      height: 280px;
    }

  }


`

export default ProfileDiv