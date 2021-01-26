import DoarStyled from "./styled";
import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {Context} from '../../context/authContext'
import DonateAnimals from "./DonateComponent/DonateAnimals";
import DonateMoney from "./DonateComponent/DonateMoney";

export default function Doar (){
  const [handleComponent, setHandleComponent] = useState(false)
  const history = useHistory()

  const {authenticated} = useContext(Context)
  if(!authenticated){
    return history.goBack()
  }

  function changeHandleComponent(){
    handleComponent?setHandleComponent(false):setHandleComponent(true)
  }

  return (
    <DoarStyled>
      <section>
      <div className='intro-donate'>
      <h1>Você deseja doar <button onClick= {changeHandleComponent}> {handleComponent?'DINHEIRO':'ANIMAL'} </button> ? </h1>
      {handleComponent?<DonateAnimals/>:<DonateMoney/>} 
      </div>

      <article>
        <img src="https://image.freepik.com/free-vector/pet-store-animal-shelter-man-taking-puppy-from-cage-buying-adopting-dog-volunteers-helping-choose-homeless-animal-adoption_74855-8527.jpg" alt=""/>
      </article>        
      </section>

    </DoarStyled>
  )
}