import  NavBarStyled  from "./styled"
import {Link} from 'react-router-dom'


export default function NavBar (){
  return (
    <NavBarStyled>
      <h1>Animals</h1>
      <ul className='itens-nav'>
        <Link><li>Home</li></Link>
        <li>Pet-Shop</li>
        <li>Adotar</li>
        <li>Contato</li>
      </ul>
    <ul>
      <li>SignIn</li>
      <li>SignUp</li>
    </ul>
    </NavBarStyled>
  )
}