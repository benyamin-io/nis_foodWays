import {createContext, useReducer} from 'react'

export const LoginContext = createContext()

const initialState = {
  isLogin: false
}

const reducer = (state, action) => {
  const {type, payload} = action

  console.log(payload)

  switch(type){
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        userId: payload.userId,
        role: payload.role
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        role: ''
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