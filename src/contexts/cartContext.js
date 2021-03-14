import {createContext, useReducer} from 'react'

export const CartContext = createContext()

const initialState = {
  carts: []
}

const reducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case 'ADD_ITEM':
      
      const findItemById = state.carts.find(cart => cart.id === payload.id);

      if(findItemById){
        const updatedCarts = state.carts.map(cart => {
          if(cart.id === payload.id){
            return {...cart, qty: cart.qty + 1}
          }else{
            return cart
          }
        })

        return {
          ...state,
          carts: updatedCarts
        }

      }

      return {
        ...state,
        carts: [
          ...state.carts,
          {...payload, qty: 1}
        ]
      }

  }
}

export const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}