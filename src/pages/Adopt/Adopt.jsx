import AdoptStyled from './styled'
import {useEffect, useState, useContext} from 'react'
import {Context} from '../../context/authContext'

//Modal Adopt
import AdoptModal from './AdoptModal/AdoptModal'

//Axios Base URL
import api from '../../services/api'

//Component De Pré Carregamento Da Pagina
import Loading from '../../components/Loading/Loading.jsx'

//Se Uma Requisição de error é Renderizado esse Component
import Error from '../../components/Loading/Error.jsx'

export default function Adopt(){
  const {animalModal, setAnimalModal} = useContext(Context)

  const [animalSelect, setAnimalSelect] = useState({})
  //Recebo a Reposta da Requisiçao ao backend
  const [data, setData] = useState([])
  //Pre Carregamento Do Component
  const [loading, setLoading] = useState(true)
  //Renderiza se der Error Na Requisição
  const [error, setError] = useState(false)

  useEffect(()=>{
    //Faz uma chamada pra receber Dados do Backend
    async function getData(){
       await api.get('/')
        .then(resp =>{
          setData(resp.data)
        })
        .catch(e =>{
          setError(true)
        })
    }
    setLoading(false)
    getData()
  }, [])

  function viewAnimalAdopt(item){
    animalModal?setAnimalModal(false):setAnimalModal(true)
    console.log(item)
    setAnimalSelect(item)
  }

  if(loading){
    return <Loading/>
  }
  
  if(error){
    return <Error/>
  }

  return (
    <>
    {animalModal?<AdoptModal animal={animalSelect}/>:''}
    <AdoptStyled>   <div className='initial'>
      <header className='adopt'>
        <h1>Seja bem vindo ao abrigo de animais</h1>
        <p>Aqui sua ação pode salvar vidas</p>
        <p>Você pode agendar uma visita para ver nossos bichinhos</p>
        <p>Endereço: Avenida Ficticia 999, cep: XXX-XX-XXX</p>
        <p>Aberto das 08:00 as 19:00hrs de segunda a sexta</p>

        <form action="" method="get">
          <label htmlFor="">Nome do bichinho: </label>
          <input type="text" placeholder='Ex: Frederico'/>
<br/>
          <label htmlFor="">Idade do bichinho: </label>
          <input type='text' placeholder='1 ano e 2 meses, 1 ano ou 2 anos...'/>
<br/>
          <label htmlFor="">Especie do bichinho: </label>
          <select name="" id="">
            <option value="Cão">Cão</option>
            <option value="Gato">Gato</option>
            <option value="Passarinho">Passarinho</option>
            <option value="Hamster">Hamster</option>
            <option value="Peixe">Peixe</option>
          </select>

<br/>
          <label htmlFor="">Dono do bichinho: </label>
          <input type='text' placeholder='nome do dono bichinho que você quer adotar'/>

          <button type='submit'><p>PROCURAR</p></button>
        </form>


      </header>
      <article>
        <img src="https://image.freepik.com/free-vector/adopt-pet-concept_23-2148525717.jpg" alt=""/>
      </article>
    </div>

    <section className='home-adopt'>
      <h1>Animais em busca de uma lar</h1>
      <div className='item'>
        <p>Conheça já seu novo amigo</p>
        <div className='grid-box'> 
    {data.map(item =>(               
              <ul key={item._id}> 
                <li> <h1>{item.nome}</h1> </li>
                <li ><img src={item.fotos[0]} alt=""/></li>
                <li>Especie: <label htmlFor=""> {item.especie}</label></li>
                <li>Raça: <label htmlFor=""> {item.raca}</label></li>
                <li>Idade: <label htmlFor=""> {item.idade}</label></li>
                <button className='btn-adopt' onClick={()=>viewAnimalAdopt(item)}>Adotar</button>
                </ul>
          ))}
    </div>
      </div>

    

    </section>

  </AdoptStyled>
    </>
  )
}