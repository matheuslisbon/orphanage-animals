import HomeStyled from "./styled";

export default function Home (){
  return (
    <HomeStyled>
      <div className='home'>
              <header>
             <h1>Seja um colaborador e salve vidas</h1>

             <p>Ao adotar, você ajuda a reduzir o número de cães e gatos abandonados. Os animais de rua já passaram por muito sofrimento e tudo o que precisam é de um lar para serem felizes de verdade!</p>
             <p>E não há recompensa maior do que vê-los se transformarem naquela coisinha alegre e saudável depois de receberem uma boa dose de cuidado e carinho.</p>
      </header>

      <article>
        <img src="https://image.freepik.com/free-vector/adopt-pet-concept_23-2148514252.jpg" alt=""/>
      </article>

      </div>

      <div className='home'>       
        <header>
          <h1>Inicio</h1>
           <p>      Começamos resgatando cães e gatos nas ruas, vítimas de abandono e maus-tratos. Esses animais recebem todo o tratamento necessário à sua recuperação, são tratados, reabilitados, vacinados, vermifugados e castrados, depois disponibilizados para adoção responsável.</p>
        </header>
<article>
                <img src="https://image.freepik.com/free-vector/tiny-doctors-caring-dog-vet-office_74855-6677.jpg" alt=""/>
 
       </article>

      </div>
    </HomeStyled>
  )
}