import {createContext, useReducer} from 'react'
import { Modal } from 'react-bootstrap'

export const ModalContext = createContext()

const initialState = {
  login: false,
  register: false
}

const reducer = (state, action) => {
  const {type, payload} = action
  
  switch(type){
    case 'SHOW_MODAL_LOGIN':
      return {
        ...state,
        login: true,
        partnerId: null || payload
      };
    case 'SHOW_MODAL_REGISTER':
      return {
        ...state,
        register: true
      };
    case 'CLOSE_MODAL_LOGIN':
    return {
      ...state,
      login: false
    };
    case 'CLOSE_MODAL_REGISTER':
      return {
        ...state,
        register: false
      };
    default :
      throw new Error()
  }
}

export const ModalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  )
}