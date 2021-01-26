import ProfileDiv from './styled'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import api from '../../services/api'

import Loading from '../../components/Loading/Loading.jsx'
import Error from '../../components/Loading/Error'

export default function Profile (){
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const id = localStorage.getItem('id')
    async function getProfile(){
        await api.get(`/user/profile/${id}`)
        .then(response =>{
         setProfile(response.data)

        })
        .catch(()=>{
          setError(true)
        })
         setLoading(false)
    }
    getProfile()
  }, [])

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <ProfileDiv>
      <header>
              <div>
      <h1>Seja bem vindo</h1>
      <h2>{profile.nome}</h2>
      <ul>
        <li><label>Nome: </label>  {profile.nome}</li>
        <li><label>Telefone:</label>  {profile.telefone}</li>
        <li><label>Estado:</label>  {profile.estado}</li>
        <li><label>Cidade: </label> {profile.cidade} </li>
        <li><label>E-mail:</label> {profile.email} </li>
      </ul>
      </div>

      <section>
             <h2>Deseja criar um produto ? </h2> <button><Link to='/create-product' style={{color:'white'}}>CRIAR</Link></button>
             <img src="https://image.freepik.com/free-vector/young-investors-working-profit-dividend-revenue_74855-6143.jpg" alt=""/>
      </section>


      </header>
    </ProfileDiv>
  )
}