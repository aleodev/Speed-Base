import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'

const App = () => (

  <div className="container-fluid">
    <section id="snow"></section>
    <Header/>
    <Route exact path="/" component={Home} />
  </div>
)

export default App
