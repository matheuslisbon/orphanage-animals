import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Adopt from './pages/Adopt/Adopt'
import Contato from './pages/Contato/Contato'
import CreateOrphanage from './pages/CreateOrphanage/CreateOrphanage'
import Donate from './pages/Donate/Donate'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

import PetShop from './pages/PetShop/PetShop'
import Profile from './pages/Profile/Profile'

export default function Routes (){
  return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/petshop' component={PetShop} />
        <Route path='/adopt' component={Adopt} />
        <Route path='/login' component={Login} />
        <Route path='/doar' component={Donate} />
        <Route path='/contato' component={Contato} />
        <Route path='/profile' component={Profile} />
        <Route path='/create-product' component={CreateOrphanage} />
      </Switch>
  )
}