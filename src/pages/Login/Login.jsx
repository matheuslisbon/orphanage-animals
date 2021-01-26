import LoginStyled from "./styled";
import {useState, useContext} from 'react'
import LoginComp from './CompLogin/LoginComp' 
import CadastrarComp from './CompLogin/CadastrarComp' 
import {Context} from '../../context/authContext'

export default function Login (){
  const [log, setLog] = useState(false)
  //Verifica se o Usuario Estar Logado ou Não
  const {authenticated} = useContext(Context)
  //Login Component
  const Entrar = LoginComp()
  //Signup Component
  const Formulario = CadastrarComp()

  function handleComp(){
    log?setLog(false):setLog(true)
  }

  return (
 
    <LoginStyled>

      <h1 className='into'>Olá Seja bem vindo {authenticated?'sair':'entrar'}</h1>

      <p>{log?'já tem uma conta ? ':'Deseja Criar uma Conta ? '}
        <button className='handleLogin' onClick={handleComp}>
           {log?'Entrar':'Cadastrar'}
        </button></p> 

      <div>     
          {log ? Formulario:Entrar}
      </div>
    </LoginStyled>

  )
}