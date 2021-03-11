import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Header from './components/layouts/header'

import pizza from './assets/pizza.png' 

import {popular} from './data'
import {nearyou} from './data'

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const logged = () => {
    setIsLogin(true)
  }

  const [showModal, setShowModal] = useState({
    login: false,
    register: false,
  });

  
  const handleShowModal = (which) => setShowModal({...showModal, [which]: true});
  const handleCloseModal = (which) => setShowModal({...showModal, [which]: false});



  return (
    <Router>
      <div className="pb-5" style={{background: '#EFEFEF'}}>

        <Header isLogin={isLogin} logged={logged} showModal={showModal} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} />


        <div style={{background: "#FFC700"}}>
          <Row className="w-75 mx-auto pt-5" style={{paddingTop: "108px"}}>
            <Col>
              <h1>Are You Hungry ? Express Home Delivery</h1>
              <Row>
                <Col>
                  <hr style={{borderWidth: "3px", backgroundColor: "black"}}/>
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


        <div className="mx-auto mt-5 w-75">
            <h3>Popular Restaurant</h3>
            <div className="mt-4 row">

              {popular.map(item => {
                const {image, title} = item
                return(
                  <div className="col-md-3 mb-3">
                    <div className="bg-white py-2 px-4">
                      <Row className="align-items-center">
                        <Col className="text-center" sm={4}>
                          <img src={image} />
                        </Col>
                        <Col sm={8}>
                          {title}
                        </Col>
                      </Row>
                    </div>
                  </div>
                )
              })}

            </div>
        </div>


        <div className="mx-auto mt-5 pt-3 w-75">
            <h3>Restaurant Near You</h3>
            <div className="mt-4 row">

              {nearyou.map(item => {
                const {image, title, distance} = item
                return(
                    <div className="col-md-3 mb-3">
                      <Link to={isLogin? '/product/id' : '#'} onClick={() => {!isLogin? handleShowModal('login') : handleCloseModal('login')
                      }} className="text-dark">
                        <div className="bg-white p-2 py-4">
                          <div className="text-center">
                            <img src={image} />
                          </div>
                          <div className="ml-2 mt-4">
                            <b>{title}</b>
                          </div>
                          <div className="ml-2 mt-2">
                            {distance}
                          </div>
                        </div>
                      </Link>
                    </div>
                )
              })}

            </div>
        </div>



        
      </div>
    </Router>
  )
}

export default App
