import styled from 'styled-components'

const HomeStyled = styled.div`
div.home{
    display:flex;
  justify-content:space-between;
  padding-top:44px;

  margin:0 auto;
}

  div.home header{
    font-size: 18px;
    padding:60px;
    display:flex;

    line-height:1.5;
    align-items:center;

    flex-direction: column;
  }
  div.home h1{
    font-family:'Fredoka One';
    color: #1764C2cc;

  }
  div.home p{
    font-size: 20px;
    font-family:'Comfortaa';
    padding: 20px 0;
  }
  @media(max-width:1050px){

    div.home p{
      font-size:17px;
    }
    article img{
      height: 50vh;
    }
  }
  @media(max-width:800px){
    div.home{
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
    }
    div.home p{
      font-size:15px;
    }
    article img{
      height: 40vh;
    }
  }
`

export default HomeStyled