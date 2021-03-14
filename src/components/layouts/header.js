import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import {Row, Col, Container, Button, Dropdown} from 'react-bootstrap'

import Login from '../../components/login'
import Register from '../../components/register'

import logo from "../../assets/header/logo.png"
import cart from "../../assets/header/cart.png"
import avatar from "../../assets/header/avatar.png"
import logout from "../../assets/header/logout.png"
import profile from "../../assets/header/profile.png"
import addproduct from "../../assets/header/addproduct.png"

import {LoginContext} from '../../contexts/loginContext'
import {ModalContext} from '../../contexts/modalContext'


export default function Header({}) {

  const [state, dispatch] = useContext(LoginContext)

  const [modal, dispatchModal] = useContext(ModalContext)
  
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

              {!state.isLogin && 
              <Row className="justify-content-end">
                <Button variant="dark" className="mr-4 px-4" onClick={()=> dispatchModal({type: 'SHOW_MODAL_REGISTER'})}>Register</Button>

                <Button variant="dark" className="px-4" onClick={() => dispatchModal({type: 'SHOW_MODAL_LOGIN'})} >Login</Button>
              </Row>
              }

              {state.isLogin && 
                <Row className="justify-content-end align-items-center mr-4">
                  <div className="mr-4">
                    <img src={cart} />
                  </div>
                  <div>
                
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic" style={{padding: '0'}}>
                        <img src={avatar} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
                          <div><img src={profile}/> </div>
                          <div className="ml-3">{localStorage.role == 'user'? 'Profile' : 'Profile Partner'}</div>
                        </Dropdown.Item>
                        
                        {localStorage.role != 'user'?
                           <Dropdown.Item >
                              <Link to='/product/add'>
                                <div className="d-flex align-items-center text-dark">
                                  <div><img src={addproduct}/> </div>
                                  <div className="ml-3">
                                    Add Product
                                  </div>
                                </div>
                             </Link>
                            </Dropdown.Item> : null
                        }
                       
                        <Dropdown.Divider style={{border: "1px solid gray"}} />
                        <Dropdown.Item href="#/action-3">
                          <div className="d-flex align-items-center" onClick={() => window.location = 'http://localhost:3000'}>
                            <div>
                              <img src={logout} />
                            </div>
                            <div className="ml-3">
                              Logout
                            </div>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                      
                  </div>
                 
                </Row>
              }
            </Col>

          </Row>
      </Container>

   

      {modal.login && modal.partnerId ? <Login from={modal.partnerId} /> : <Login /> }

      {modal.register && <Register />}
    </header>
  )
}

