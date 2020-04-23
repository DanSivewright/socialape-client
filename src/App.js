import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Pages
import { Home } from './components/layout/Home'
import { Login } from './components/layout/Login'
import { Signup } from './components/layout/Signup'

// Components
import { Navbar } from './components/Navbar'

// const token = localStorage.FBIdToken;
// if(tokenn) {
//   const decodedToken = jwtDecode(token)
  console.log(localStorage.getItem.FBIdToken)
// }

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
