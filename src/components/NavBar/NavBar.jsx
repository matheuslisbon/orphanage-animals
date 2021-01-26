import  NavBarStyled  from "./styled"
import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
// React Context Hooks
import {Context} from '../../context/authContext'
// Modal (Carrinho de items)
import Modal from "../Modal/Modal"
//React Icons -> Icones
import { BiCart, BiLogOut, BiMenu, BiDonateHeart} from "react-icons/bi";
import {CgProfile} from 'react-icons/cg'


export default function NavBar (){

  // authenticated -> Se Não Estiver Auth Alguns Components Não Aparecerão
  // handleLogout -> Sai da conta (Apenas se estiver logado)
  // modal -> Carrinho 
  // visibleModal -> Verifica se o carrinho ta aberto ou fechado
  const {authenticated, handleLogout, modal, visibleModal} = useContext(Context)

  //Verifica Se o Button De Navegação Esta Aberto Ou Fechado
  const [navBar, setNavBar] = useState(false)

  //Fecha ou Abri o NavBar
  function handleNavBar(){
    navBar?setNavBar(false):setNavBar(true)
  }

  return (
    <NavBarStyled>
      <div className='itens-navbar'>

        <h1 className='navbar'>Animals</h1>

        <div className="nav-responsive">
          <BiMenu size={32} color='#606060' onClick={handleNavBar} style={{cursor:'pointer'}}/>
          <nav className={navBar?'active':'notActive'}>

          <ul>
            <Link to='/'  className='itens-navbar'> <li>Home</li></Link>
            <Link to='/petshop' className='itens-navbar'><li>Pet-Shop</li></Link>
            <Link to='/adopt' className='itens-navbar'><li>Adotar</li></Link>
            <Link to='/contato' className='itens-navbar'><li>Contato</li></Link>
          </ul>

          </nav>
        </div>
        <ul className='itens-nav not-responsive'>
          <Link to='/'  className='itens-navbar'> <li>Home</li></Link>
          <Link to='/petshop' className='itens-navbar'><li>Pet-Shop</li></Link>
          <Link to='/adopt' className='itens-navbar'><li>Adotar</li></Link>
          <Link to='/contato' className='itens-navbar'><li>Contato</li></Link>
        </ul>

        <ul className='itens-nav auth-items'>

          {authenticated? <li className='itens-navbar-icon' onClick={visibleModal}><BiCart size={32}/></li>:''}
          {authenticated? <Link to='/doar'><li className='itens-navbar-icon'><BiDonateHeart size={32}/></li></Link>:''}
          {authenticated? <Link to='/profile'><li className='itens-navbar-icon'><CgProfile size={32} style={{color:'green'}}/></li></Link>:''}
          {authenticated?<li className='itens-navbar-icon' onClick={handleLogout}> <BiLogOut size={32} style={{marginRight:'6px',color:'#ff0000 ', padding:'0px'}}/></li>:<Link to='/login'><li className='itens-navbar'>LOGIN</li></Link>}
        </ul>   

      </div>

      <div>
        {modal?<Modal />:''}
      </div>

    </NavBarStyled>
  )
}