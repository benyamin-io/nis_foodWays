import React, {useState} from 'react'

import {Navbar, Nav, Row, Col, Container, Button} from 'react-bootstrap'

import Login from '../../components/login'
import Register from '../../components/register'

import logo from "../../assets/logo.png"


export default function Header() {

  const [showModal, setShowModal] = useState({
    login: false,
    register: false,
  });

  const handleShowModal = (which) => setShowModal({...showModal, [which]: true});
  const handleCloseModal = (which) => setShowModal({...showModal, [which]: false});

  return (
    <header>
      <Container fluid>
          <Row className="justify-content-between py-4" style={{background: "#FFC700"}}>
            <Col>
              <Row className="ml-4 align-items-center">
                <div className="mr-2">WaysFood</div>
                <img src={logo}/>
              </Row>
            </Col>
            <Col className="pr-5 mr-2">
              <Row className="justify-content-end">
                <Button variant="dark" className="mr-4 px-4" onClick={()=> handleShowModal('register')}>Register</Button>

                <Button variant="dark" className="px-4" onClick={() => handleShowModal('login')} >Login</Button>
              </Row>
            </Col>
          </Row>
      </Container>

      {showModal.login && <Login handleCloseModal={handleCloseModal} showModal={showModal.login} />}

      {showModal.register && <Register handleCloseModal={handleCloseModal} showModal={showModal.register} />}
    </header>
  )
}

