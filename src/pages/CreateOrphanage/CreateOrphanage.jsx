import CreateOrphanageDiv from "./styled";
//Icone do React
import {FcMoneyTransfer} from 'react-icons/fc'

import {useState} from 'react'

//Axios Base Url
import api from '../../services/api'

//Rediciona as Rotas
import {useHistory} from 'react-router-dom'

//Envia Notificações
import {toast} from 'react-toastify'

export default function CreateOrphanage (){
  const history = useHistory()
  const [produto, setProduto] = useState('')
  const [valor, setValor] = useState(1)
  const [categoria, setCategoria] = useState('')
  const [tamanho, setTamanho] = useState('')
  const [cor, setCor] = useState('')
  const [foto, setFoto] = useState('')

  async function handleForm (e){
    e.preventDefault()

    if(produto && valor && categoria && tamanho && cor && foto){
      api.post('/petshop', {produto, valor, categoria, tamanho, cor, foto})
        .then(res => {
          toast('Seu produto foi criado')
          history.push('/petshop')
        
        })
        .catch(e => toast.error('Tivemos um pequeno problema'))
        return
    }
    toast.error('Insira os dados corretamente')
    
  }

  return (
    <CreateOrphanageDiv>
      <header>
        <div>

          <h1> Anuncie e comece a vender </h1>

          <form onSubmit={handleForm}>
                          
            <p>Nome do produto</p>
            <input type="text" onChange={e => setProduto(e.target.value)} placeholder=' Exemplo: Caneca Personalizada'/>

            <p>Valor</p>

            <article>
              <FcMoneyTransfer size={40} style={{background:'white',width:'45px', borderRadius:'8px 0 0 8px', height:'41px', padding:'4px', borderBottom:'3px solid #999999cc'}}/> <p>R$</p>
              <input className='input-value' onChange={e => setValor(e.target.value)} type="number" placeholder=' Digite apenas o valor ex: 50 ou 50,99'/>
            </article>
 
            <p>Categoria</p>
            <input type="text" onChange={e => setCategoria(e.target.value)}  placeholder=' Ex: Vestimentas, Brinquedo, Comida'/>
            
            <p>Tamanho</p>
            <input type="text" onChange={e => setTamanho(e.target.value)} placeholder=' Ex: P, M, Gg, ou 1000ml, 10m...'/>

            <p>Cor</p>
            <input type="text" onChange={e => setCor(e.target.value)} placeholder=' Ex: Azul, Roxo, Vermelho ...'/>

            <p>Link da foto</p>
            <input type="url" onChange={e => setFoto(e.target.value)} placeholder=' Ex: https:linkImagem.com'/>

            <button type='submit'>CADASTRAR PRODUTO</button>

          </form>

        </div>

        <section>
          <img src="https://image.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg" alt=""/>
        </section>

      </header>
    </CreateOrphanageDiv>

  )
}