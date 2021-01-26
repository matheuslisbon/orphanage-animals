import Axios from 'axios'
import {useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'

const CadastrarComp = function () {

    const [estado, setEstado] = useState('0')
    const [cidade, setCidade] = useState('0')

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [estadoSelect, setEstadoSelect] = useState([])
    const [selectCity, setSelectCity] = useState([])

    useEffect(()=>{
        async function getData(){
            await Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res =>{
                const arrayStates = res.data.map(uf => uf.sigla)
                setEstadoSelect(arrayStates)
            })
        }
        getData()
    }, [])

    useEffect(() => {
        if(estado === '0') return

        async function getCities (){
            await Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
                .then(response => {
                    const arrayCities = response.data.map(city => city.nome)
                    setSelectCity(arrayCities)
                })
        }
        getCities()
    },[estado])

    async function handleCreateAccount(e){
    e.preventDefault()
    if(!nome || !estado || !cidade || !telefone || !user || !email || !password){
        return toast.warning('Insira todos os dados')
    }
    if (estado === '0' || cidade ==='0'){
        return toast.warning('Insira todos os dados')
    }
    try {
        if(nome && estado && cidade && telefone && user && email && password){
        await api.post('/user', {
            nome,
            estado,
            cidade,
            telefone,
            user,
            email,
            password
        }).then(res =>{
            toast('Sua Conta foi Criada')
        }).catch(e =>{
            toast.warning('Verifique Se Os dados Estão Corretos')
        })
    }
    } catch (error) {
        toast.warning('Insira os Dados Corretamente')
    }
    }

    return (
<form action="#" method='post' onSubmit={handleCreateAccount}>
    <h1>Cadastrar</h1>
    
    
    <label htmlFor="">Nome: </label>
    <input type="text" placeholder='Evite Usuarios como nome de pessoas !' onChange={e => setNome(e.target.value)} required/>
    <br/>

    <label htmlFor="" >Estado: </label>
    <select name="uf" id="uf" value={estado} onChange={(e)=> setEstado(e.target.value)} required>
    <option value="0">Selecione um estado</option>
        {estadoSelect.map(uf =>(
            <option key={uf}>{uf}</option>
        ))}

    </select>

    <br/>
    <label htmlFor="" >Cidade: </label>
    <select name="city" id="city" onChange={e => setCidade(e.target.value)} value={cidade} required>
    <option value="0">Selecione uma cidade</option>
        {selectCity.map(city =>(
            <option key={city}>{city}</option>
        ))}
    </select>

    <br/>
    <label htmlFor="" >Telefone: </label>
    <input required type="text" placeholder='Ex: (99) 9 9999-9999 ' onChange={e => setTelefone(e.target.value)}/>
    <br/>
    <label htmlFor="" >Usuario: </label>
    <input required type="text" placeholder='Evite nome de usuarios comuns !' onChange={e => setUser(e.target.value)}/>
    <br/>
    <label htmlFor="" >E-mail: </label>
    <input required type="email" placeholder='seu E-mail mais usado !' onChange={e => setEmail(e.target.value)}/>
    <br/>
    <label htmlFor="" >Password: </label>
    <input required type="password" placeholder='Evite senhas pequenas !' onChange={e => setPassword(e.target.value)}/>
    
    
    <button type='submit'>CADASTRAR</button>
    </form>
    )
}
export default CadastrarComp