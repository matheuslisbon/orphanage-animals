import api from "../../../services/api"
import {useState, useContext} from 'react'
import {Context} from '../../../context/authContext' 
import { toast } from "react-toastify"

const EntrarComp = function(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {handleSetAuthenticated} = useContext(Context) 

  async function handleLogin(e){
    e.preventDefault()
    try {
      if(user && password){
      await api.post('/user/login', {user, password})
      .then(res =>{
        const id = res.data.data[0]._id
        localStorage.setItem('id', id)
        const token = res.data.token
        localStorage.setItem('token', token)

        handleSetAuthenticated()

        api.defaults.headers.Authorization = `Bearer ${token}`
      }).catch(e =>{
        toast.warning('Insira os dados Corretamente')
      })
    }
    } catch (error) {
      toast.warning('Insira os dados Corretamente')
    }
    
  }
  return(
    <form action="#" method="post" onSubmit={handleLogin}>
  <h1>Entrar</h1>

  <label htmlFor="">usuario: </label>
  <input type="text" placeholder='Evite Usuarios como nome de pessoas !'  onChange={e => setUser(e.target.value)}/>
  <br/>
  <label htmlFor="" >senha: </label>
  <input type="password" placeholder='Evite senhas pequenas !' onChange={e => setPassword(e.target.value)}/>

  <button type='submit'>ENTRAR</button>
</form>
  )
} 

export default EntrarComp
