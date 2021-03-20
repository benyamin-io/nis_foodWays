import {createContext, useReducer} from 'react'

export const CartContext = createContext()

const initialState = {
  carts: [],
  currentPartner: ''
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
          {...payload, qty: 1,}
        ]
      };
    case 'ADD_RESTO':
      return{
        ...state,
        currentPartner: payload
      };
    case 'REMOVE_ITEM':
      const filteredCarts = state.carts.filter(cart => {
        return cart.id !== payload
      })

      return {
        ...state,
        carts: filteredCarts
      };
      case 'DECREASE_QTY':
      
        const findItemById1 = state.carts.find(cart => cart.id === payload.id);
  
        if(findItemById1){
          const updatedCarts = state.carts.map(cart => {
            if(cart.id === payload.id && cart.qty > 1){
              return {...cart, qty: cart.qty - 1}
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
        };
    default :
      throw new Error()

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