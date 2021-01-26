import React, {createContext, useState, useEffect} from 'react'

import {useHistory} from 'react-router-dom'

//Component De Pré Carregamento da Pagina Aparece 
// Enquanto A pagina esta Carregando
import LoadingFunc from '../components/Loading/Loading'

//Mensagens Do React
import {toast} from 'react-toastify'

// Axios Base URL
import api from '../services/api'
//Criação do Context
const Context = createContext()

function AuthProvider({children}){
  // Verifica se User Esta Logado Ou não
  const [authenticated, setAuthenticated] = useState(false)
  // Faz Um Pre Carregamento da Pagina
  const [loading, setLoading] = useState(true)
  //Serve pra Direcionar Rotas
  const history = useHistory()
  //intes do carrinho
  const [itens, setItens] = useState([])
  // Verifica se o Carrinho Esta Aberto ou Fechado
  const [modal, setModal] = useState(false)
  const [animalModal, setAnimalModal] = useState(false)

  //Se o Carrinho Estiver Aberto Ira fechar Vice-versa
  function visibleModal (){
    modal?setModal(false):setModal(true)
  }

 // IMPORTANTE 
  // Pega o token Se De Valido Ele salva o Token
  //E loga o usuario E authentica Ele na aplicação
  //Se não Estiver logado Não Auth e não faz nada
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      toast('seja bem vindo')
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  // Quando o Usuario Faz Login ele é Enviado pra cá 
  // Fica Autenticado E depois Retorna A Rota /profile
  function handleSetAuthenticated(){
    setAuthenticated(true)
    toast('seja bem vindo')
    history.push('/profile')
  }

  //Função que Pega o ID do Produto No Carrinho E o deleta
  function handleDeleteModal(id){

  const filt = itens.filter(el =>{
    if(el._id !== id){
      return true
    }else {
      return false}
  })
  setItens(filt)
  }

  // Quando O Usuario Sair Da Conta Ele é chamado pra cá
  // Aqui o Token Dele é deletado E ele vai pra 
  // Home Já não Autenticado
  function handleLogout(){
    setAuthenticated(false)
    localStorage.removeItem('token')
    setModal(false)
    history.push('/')
  }


  //Pré Carrega A Pagina
  if(loading){
    return <LoadingFunc/>
  }

  return (
    <Context.Provider value={{handleDeleteModal, authenticated, handleLogout, handleSetAuthenticated, modal, visibleModal, setItens, itens, animalModal, setAnimalModal}}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}