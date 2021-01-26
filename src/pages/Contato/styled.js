import styled from 'styled-components'

const ContatoStyled = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding: 40px;
  min-height: 84.6vh;
  padding-top: 96px;

  margin: 0 auto;
  line-height: 1.5;
  font-family:Comfortaa;
  font-size: 24px;
div{
  width: 64%;
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 40px;
  border-radius:12px;
  background: #82d9d0cc;
  box-shadow: 1px 1px 20px #82d9d0cc;
  border: 1px solid #82d9d0cc;
  color: #353535;

}
div h1{
  font-family:'Fredoka One';
  margin-bottom: 20px;
  text-shadow: 2px 2px 1px #82d9d0cc;
  color: #353535;
}

div ul {
  display:flex;
}
div ul li {
  padding: 6px;
}
div ul li img{
  height: 48px;
  cursor: pointer;
}
@media(max-width:700px){
  div{
    width: 100%;
  
  }
}

`

export default ContatoStyled