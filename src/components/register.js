import React, {useState, PureComponent, Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'

import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

import {ModalContext} from '../contexts/modalContext'
import {UserContext, UserContextProvider} from '../contexts/userContext'

export default function Register({}){

  const [data, setData] = useState({
    email: '',
    password: '',
    fullname: '',
    gender: '',
    phone: '',
    role: ''
  })

  const [users, dispatchUsers] = useContext(UserContext)

  const [modal, dispatchModal] = useContext(ModalContext)

  class Select extends PureComponent {
    state = {
      options: [
        {
          name: 'As User',
          value: null,
        },
        {
          name: 'Customer',
          value: 'user',
        },
        {
          name: 'Restaurant',
          value: 'partner',
        },
      ],
      value: '?',
    };
  
    handleChange = (event) => {
      setData({...data, role: event.target.value})
      this.setState({ value: event.target.value });
    };
    
    render() {
      const { options, value } = this.state;
    
      return (
        <Fragment>
          <select onChange={this.handleChange} value={data.role} className="w-100 p-2">
            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </Fragment>
      );
    }
  }

  const setRole = (val) => {
    setData({...data, role: val})
  }



  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }
 

  const handleRegister = e => {
    e.preventDefault()

    const newUser = {
      id: Math.floor(Math.random() * 1000),
      email: data.email,
      password: data.password,
      fullname: data.fullname,
      gender: data.gender,
      phone: data.phone,
      role: data.role
    }

    dispatchUsers({type: 'ADD_USER', payload: newUser})

    dispatchModal({type: 'CLOSE_MODAL_REGISTER'})
    dispatchModal({type: 'SHOW_MODAL_LOGIN'})

    // if (typeof(localStorage) !== "undefined") {
    //   localStorage.setItem("email", data.email);
    //   localStorage.setItem("password", data.password);
    //   localStorage.setItem("fullname", data.fullname);
    //   localStorage.setItem("gender", data.gender);
    //   localStorage.setItem("phone", data.phone);
    //   localStorage.setItem("role", data.role);

    //   console.log(localStorage.getItem("email"))
    //   console.log(localStorage.getItem("password"))
    //   console.log(localStorage.getItem("fullName"))
    //   console.log(localStorage.getItem("gender"))
    //   console.log(localStorage.getItem("phone"))
    //   console.log(localStorage.getItem("role"))
    // } else {

    // }
  }

  return(
    <Modal show={modal.register} onHide={() => dispatchModal({type: 'CLOSE_MODAL_REGISTER'})} centered dialogClassName="register-modalw">
      <div>
        <h3 className="mb-5">Register</h3>
        <form onSubmit={handleRegister}>
          <input type="text" name="email" placeholder="Email" className="p-2 w-100 mb-4" value={data.email} onChange={handleChange} />

          <input type="password" name="password" placeholder="Password" className="p-2 w-100 mb-4" value={data.password} onChange={handleChange}/>

          <input type="text" name="fullname" placeholder="Full Name" className="p-2 w-100 mb-4" value={data.fullname} onChange={handleChange}/>

          <input type="text" name="gender" placeholder="Gender" className="p-2 w-100 mb-4" value={data.gender} onChange={handleChange}/>

          <input type="text" name="phone" placeholder="Phone" className="p-2 w-100 mb-4" value={data.phone} onChange={handleChange}/>

          {/* <select className="w-100 p-2" name="role" onChange={handleChange}>
            <option>As User</option>
            <option value="user">Customer</option>
            <option value="partner">Restaurant</option>
          </select> */}

          <Select />

          <Button onClick={handleRegister} className="w-100 mt-5 py-2">Register</Button>
        </form>

        <div className="text-center mt-3">
          <Link to=""  onClick={() => {
                  dispatchModal({type: 'CLOSE_MODAL_REGISTER'})
                  dispatchModal({type: 'SHOW_MODAL_LOGIN'})
                }}>Already have an account ? Click here</Link>
        </div>
      </div>
    </Modal>
  )
}




