import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import history from './services/history'

import Home from './pages/Home/Home'

import PetShop from './pages/PetShop/PetShop'

export default function Routes (){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/petshop' component={PetShop} />
      </Switch>
    </BrowserRouter>
  )
}