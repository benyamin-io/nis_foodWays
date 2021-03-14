import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'

import {LoginContext} from '../contexts/loginContext'
import Login from './login.js'

const PrivateRoute = ({component: Component, ...rest}) => {
  const [state] = useContext(LoginContext)

  return(
    <Route {...rest} render={(props) => {
      return state.isLogin? <Component {...props} /> : <Redirect to="/" />
    }} />
  )
}

export default PrivateRoute