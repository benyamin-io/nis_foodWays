import React, {useState, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Header from './components/layouts/header'
import Detail from './pages/detail'
import AddProduct from './pages/addProduct'

import { LoginContextProvider } from "./contexts/loginContext"
import { ModalContextProvider } from "./contexts/modalContext"
import { CartContextProvider } from "./contexts/cartContext"
import { LoginContext } from "./contexts/loginContext"
import { ModalContext } from "./contexts/modalContext"
import { CartContext } from "./contexts/cartContext"

import pizza from './assets/landing/pizza.png' 

import {popular} from './data'
import {nearyou} from './data'

function App() {

    
    // const [showModal, setShowModal] = useState({
    //   login: false,
    //   register: false,
    // });
    
  
  // const handleShowModal = (which) => setShowModal({...showModal, [which]: true});
  // const handleCloseModal = (which) => setShowModal({...showModal, [which]: false});


  return (
    <CartContextProvider>
      <ModalContextProvider>
        <LoginContextProvider>
          <Router>
            {/* <Header showModal={showModal} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} /> */}
            
            <Header />

            <Switch>
              <Route exact path="/">
              <div className="pb-5">

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

                <NearYou />

                </div>
              </Route>


              <PrivateRoute path="/partner/:id" component={Detail} />
              <Route exact path="/product/add" component={AddProduct} />
            </Switch>
            
          </Router>
        </LoginContextProvider>
      </ModalContextProvider>
    </CartContextProvider>
  )
}

function NearYou({}){

  const [state, dispatch] = useContext(LoginContext)

  const [modal, dispatchModal] = useContext(ModalContext)


  return(
    <div className="mx-auto mt-5 pt-3 w-75">
                <h3>Restaurant Near You</h3>
                <div className="mt-4 row">

                  {nearyou.map(item => {
                    const {id, image, title, distance} = item
                    return(
                        <div className="col-md-3 mb-3" key={id}>
                          <Link to={state.isLogin? `/partner/${id}`: `#`} onClick={() => {
                            // console.log(state.isLogin)
                            if(!state.isLogin){
                              dispatchModal({type: 'SHOW_MODAL_LOGIN', payload: id})
                            }else{
                              dispatchModal({type: 'CLOSE_MODAL_LOGIN'})
                            }
                          }} className="text-dark" style={{cursor: "pointer"}}>
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
  )
}

export default App
