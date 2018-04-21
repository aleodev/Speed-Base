import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'

const App = () => (
  <div className="container">
    <Header/>
    <Route exact path="/" component={Home} />
  </div>
)

export default App
