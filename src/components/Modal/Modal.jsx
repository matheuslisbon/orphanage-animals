import ModalStyled from "./styled";
import {useContext} from 'react'
// Importação do React Context Hooks
import {Context} from '../../context/authContext'
// Icone pra Deletar Items no carrinho
import {RiDeleteBin5Fill} from 'react-icons/ri'
// React Toast serve pra notifições
import {toast} from 'react-toastify'

// Carrinho Onde As Compras São Adcionadas
export default function Modal (){
  // itens -> São Os Itens No Carrinho(State)
  // visibleModal -> Função pra Fechar o Modal(carrinho)
  // handleDeleteModal -> Função que Recebe o Id do item e deleta ele
  const {itens, visibleModal,handleDeleteModal} = useContext(Context)

  //Isso Envia Apenas uma Mensagem
  function alertToast(){
    toast.info('Não é possivel comprar nesta Aplicação fictícia')
  }
  return (
    <ModalStyled>     
      <p className='closed' onClick={visibleModal}>X</p>
  
      <h1>Carrinho</h1>
      <p>seus itens</p>
       <ul>
{itens.map(item => ( 

  <li key={item._id}>
 <p>{item.produto}</p>
 <RiDeleteBin5Fill onClick={() => handleDeleteModal(item._id)} />
 </li>

 ))}
      </ul>
      <button onClick={alertToast}>COMPRAR</button>
      
    </ModalStyled>

  )
}