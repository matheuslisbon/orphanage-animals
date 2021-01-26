import LoadingStyled from './LoadingStyled'

/*
Função Que Retorna Uma mensagem se alguma Requisição 
Ainda estiver sendo Carregada
*/

export default function Loading() {
   return (
  <LoadingStyled>
    <div>
              <h1>Carregando...</h1>
    </div>

    </LoadingStyled>
)}