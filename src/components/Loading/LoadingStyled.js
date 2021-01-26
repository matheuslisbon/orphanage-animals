import styled from 'styled-components'

const StyledLoading = styled.div`
div{
    background:#82D9D0;
    font-family: 'Fredoka One';
    font-size: 48px;
    width: 70%;
    display: flex;
    justify-content:center;
    align-items:center;
    height: 46vh;
    border-radius: 28px;
}
  height: 84.6vh;

  width: 100%;

  display: flex;
  justify-content:center;
  align-items:center;
  @media(max-width:900px){
    div{
      font-size: 26px; 
    }
  }
  @media(max-width:500px){
    div{
      font-size: 14px; 
    }
  }
`

export default StyledLoading