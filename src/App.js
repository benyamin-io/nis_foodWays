import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/layouts/header'

import pizza from './assets/pizza.png' 

function App() {
  return (
    <Router>
    <div className="">
      <Header />


      <div style={{background: "#FFC700"}}>
        <Row className="w-75 mx-auto pt-5" style={{paddingTop: "108px"}}>
          <Col>
            <h1>Are You Hungry ? Express Home Delivery</h1>
            <Row>
              <Col>
                <div>=============</div>
              </Col>
              <Col>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </Col>
            </Row>
          </Col>  

            <Col style={{paddingBottom: "40px"}}>
              <img src={pizza}/>
            </Col>
        </Row>
      </div>
    </div>
    </Router>
  )
}

export default App
