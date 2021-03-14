import {createContext, useReducer} from 'react'

export const LoginContext = createContext()

const initialState = {
  isLogin: false
}

const reducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
      }
    default:
      throw new Error()
  }
}

export const LoginContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <LoginContext.Provider value={[state, dispatch]}>
      {children}
    </LoginContext.Provider>
  )
}