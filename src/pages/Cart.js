import {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {CartContext} from '../contexts/cartContext'

import binIcon from '../assets/cart/bin.png'

export default function Cart(){

  const [total, setTotal] = useState(0)
  const [carts, dispatchCart] = useContext(CartContext)

  const history = useHistory()

  useEffect(() => {
    setTotal(carts.carts.map(item => item.qty * item.price).reduce((total, item) => {return total + item}, 0))
  }, [carts])

  if(!carts.carts.length > 0){
    setTimeout(() => {
      history.push('/')
    }, 1500)
    return(
      <div className="w-75 mx-auto mt-5">
        <h3 className="text-center">Please Check Our Product</h3>
      </div>
    )
  }



  console.log(carts)

  return(
    <div className="w-75 mx-auto mt-5">
      <h3>{carts.currentPartner}</h3>

      <div>
        <h4>Review Your Order</h4>
        <div className="row">
            <div className="col-sm-8">
        {carts.carts.map(item => {
          
          return(

            <div className="d-flex align-items-center p-3" key={item.id}>
              <div><img src={item.image} /></div>
              <div className="d-flex justify-content-between">
                <div className="ml-3">
                  <div>{item.name}</div> 
                  <div><button className="btn" onClick={() => {
                    dispatchCart({type: 'DECREASE_QTY', payload: {id: item.id} })
                  }}>-</button> {item.qty} <button className="btn" onClick={() => {
                    dispatchCart({type: 'ADD_ITEM', payload: {id: item.id}})
                  }}>+</button></div> 
                </div>
                <div className="ml-3">
                  <div>{item.price * item.qty}</div> 
                  <div><button class="btn" onClick={() => {
                    dispatchCart({type: 'REMOVE_ITEM', payload: item.id}) }}><img src={binIcon} /></button></div> 
                </div>
              </div>
            </div>

           

          )
          })}
            </div>

            <div className="col-sm-4 p-4">
              <div className="d-flex justify-content-between">
                <div>Subtotal</div>
                <div>{total}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Qty</div>
                <div>{carts.carts.length}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Ongkir</div>
                <div>10000</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Total</div>
                <div>{total + 10000}</div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}