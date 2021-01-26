import ContatoStyled from "./styled";

//Component Que Mostra As Informações da pagina
export default function Contato (){
  return (
    <ContatoStyled>
      <div>
          <h1>Saiba como falar com a gente !</h1>
          <p>Você pode encontrar a gente pelo nosso endereço</p>
          <p>Pernambuco, Recife, Rua Rio Tejipio 101,  cep 511-80-520</p>

          <p>Nossa redes sociais são</p>
          <ul>
            <li><img src="https://www.flaticon.com/svg/static/icons/svg/733/733585.svg" alt=""/></li>
            <li><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt=""/></li>
            <li><img src="https://www.flaticon.com/svg/static/icons/svg/124/124011.svg" alt=""/></li>

          </ul>        
      </div>
    </ContatoStyled>
  )
}