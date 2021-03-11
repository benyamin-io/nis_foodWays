import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Navbar, Nav, Row, Col, Container, Button} from 'react-bootstrap'

import Login from '../../components/login'
import Register from '../../components/register'

import logo from "../../assets/logo.png"
import cart from "../../assets/cart.png"
import avatar from "../../assets/avatar.png"


export default function Header({isLogin, logged, showModal, handleShowModal, handleCloseModal}) {
  
  return (
    <header>
      <Container fluid>
          <Row className="justify-content-between py-4" style={{background: "#FFC700"}}>
            <Col>
              <Row className="ml-4">
                <Link to="/" className="d-flex text-dark align-items-center">
                  <div className="mr-2">WaysFood</div>
                  <img src={logo}/>
                </Link>
              </Row>
            </Col>

            <Col className="pr-5 mr-2">

              {!isLogin && 
              <Row className="justify-content-end">
                <Button variant="dark" className="mr-4 px-4" onClick={()=> handleShowModal('register')}>Register</Button>

                <Button variant="dark" className="px-4" onClick={() => handleShowModal('login')} >Login</Button>
              </Row>
              }

              {isLogin && 
                <Row className="justify-content-end align-items-center mr-4">
                  <div className="mr-4">
                    <img src={cart} />
                  </div>
                  <div>
                    <img src={avatar} />
                  </div>
                </Row>
              }
            </Col>

          </Row>
      </Container>

      {showModal.login && <Login handleCloseModal={handleCloseModal} showModal={showModal.login} logged={logged} />}

      {showModal.register && <Register handleCloseModal={handleCloseModal} showModal={!isLogin? showModal.register: null} />}
    </header>
  )
}

