import React from 'react'
import {useParams} from 'react-router-dom'

import {Card, Row, Col, Button} from 'react-bootstrap'

import {nearyou} from '../data'

export default function Detail() {

  const params = useParams()
  const {id} = params

  const geprekbensu = nearyou.filter(item => item.id == id)

  const products = geprekbensu[0].products

  return (
    <div className="w-75 mx-auto my-5">
      <h3 className="mb-5">Geprek Bensu Menus</h3>
      <div className="row ">
        {products.map(product => {
          return(
            <div className="col-3" >
              <Card className="mb-4" style={{background: "white"}}>
                <Card.Body>
                <Card.Img variant="top" src={product.image} />

                  <Card.Title style={{height: "30px", marginBottom: "5px", marginTop: "15px"}}><b>{product.name}</b></Card.Title>
                  <Card.Text style={{color: 'red'}}>
                    Rp. {product.price}
                  </Card.Text>
                  <Button className="w-100 py-0" style={{background: '#FFC700', color: 'black' }}><b>Order</b></Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

