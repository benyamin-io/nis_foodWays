import {createContext, useReducer} from 'react'

export const UserContext = createContext()

const initialState = {
  users: []
}

const reducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case 'ADD_USER':
      return{
        ...state,
        users: [...state.users, payload]
      };
    default:
      throw new Error()
  }
}

export const UserContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}