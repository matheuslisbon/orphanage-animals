import AdoptModalStyled from './styled'

import {useContext} from 'react'
import { Context } from '../../../context/authContext'

export default function AdoptModal({animal}){
  const {setAnimalModal} = useContext(Context)



  return (
    <AdoptModalStyled>
          <header className='adopt-modal'>
            <div>
                  <h1>{animal.nome}</h1>     
                  <button className='btn-closed' onClick={() => setAnimalModal(false)} > X </button>

            </div>
   

            <img src={animal.fotos[0]} alt=""/>
            <ul>
              <li>Especie: {animal.especie}</li>
              <li>Raça: {animal.raca}</li>
              <li>Idade: {animal.idade}</li>
              <li>Dono: {animal.user_id}</li>
            </ul>
            <button className='btn-contat'>Contato</button>
          </header>
    </AdoptModalStyled>
  )
}