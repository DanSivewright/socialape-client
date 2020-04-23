import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Pages
import { Home } from './components/layout/Home'
import { Login } from './components/layout/Login'
import { Signup } from './components/layout/Signup'

// Components
import { Navbar } from './components/Navbar'
import AuthRoute from './components/Util/AuthRoute'

let authenticated;
const token = localStorage.FBIdToken;

if(token) {
  const decodedToken = jwtDecode(token)
   if(decodedToken.exp < (new Date().getTime() + 1) / 1000) {
     window.location.href = '/login'
     authenticated = false;
   } else   {
     authenticated = true
   }
}

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} auth={authenticated}/>
            <AuthRoute exact path="/login" component={Login} auth={authenticated}/>
            <AuthRoute exact path="/signup" component={Signup} auth={authenticated}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
