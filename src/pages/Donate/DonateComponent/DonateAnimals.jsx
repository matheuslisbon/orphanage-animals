import {useState} from 'react'
import { toast } from 'react-toastify'

//Axios Base URL
import {useHistory} from 'react-router-dom'
import api from '../../../services/api'

//Component Que Recebe os Dados e cadastra um Animal no Backend
export default function DonateAnimals (){
  const history = useHistory()

  //Dados Do Animais
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [fotos, setFotos] = useState([])
    const [user_id, setUser_id] = useState('')
  
   //Função de cadastro
  async function handleSubmit(e){
    e.preventDefault()
    if(!nome || !idade || !especie || !raca || !fotos || !user_id){
      toast.error('Insira os dados corretamente ')
    }
    if(nome && idade && especie && raca && fotos && user_id){

      await api.post('/', {
        nome, idade, especie, raca, fotos, user_id
      }).then(res => {
        toast.success('Já estamos em busca de um dono para seu bichinho')
        history.push('/adopt')
      })
    }
  }
  return (
    <header>
  <h1>Para doar animal</h1>
      <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
  <h1>Doar Animal</h1>

  <label htmlFor="">Nome do bichinho: </label>
  <input type="text" placeholder='Evite Usuarios como nome de pessoas !' onChange={e => setNome(e.target.value)} />
  <br/>
  <label htmlFor="" >Idade: </label>
  <input type="text" placeholder='Exemplo: 3 anos, 1 ano ou 1 ano e 3 meses !' onChange={e => setIdade(e.target.value)}/>
  <br/>
  <label htmlFor="">Foto</label>
  <input type="text" onChange={e => setFotos([e.target.value])}/>
  <br/>
  <label htmlFor="">Especie do bichinho</label>    {especie}
  <select name="" id="" onChange={e => setEspecie(e.target.value)}>
            <option>Selecione</option>
            <option value="Cão">Cão</option>
            <option value="Gato">Gato</option>
            <option value="Passarinho">Passarinho</option>
            <option value="Hamster">Hamster</option>
            <option value="Peixe">Peixe</option>
          </select>
  <br/>
  <label htmlFor="" >Raça: </label> 
  <input type="text" placeholder='Buldogue, Rottweiler ou sem raça definida(viralata) !' onChange={e => setRaca(e.target.value)}/>
  <br/>
  <label htmlFor=""  >Dono: </label>
  <input type="text" placeholder='seu nome (importante) ! ' onChange={e => setUser_id(e.target.value)}/>


  <button type='submit'>DOAR</button>
</form>
      </div>
      </header>
  )
}