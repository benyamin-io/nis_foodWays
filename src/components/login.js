import React, {useState, useContext} from 'react'
import {Modal, show, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

import {LoginContext} from '../contexts/loginContext'
import {ModalContext} from '../contexts/modalContext'


export default function Login({from}) {
  
  console.log(from)

  const [data, setData] = useState({email: '', password: ''})

  const [state, dispatch] = useContext(LoginContext)
  const [modal, dispatchModal] = useContext(ModalContext)

  const history = useHistory()

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleLogin = e => {
    e.preventDefault()
    if(typeof(localStorage) !== 'undefined'){
      localStorage.setItem("email", data.email)
      localStorage.setItem("password", data.password)
      if(localStorage.email == 'user@gmail.com'){
        localStorage.setItem('role', 'user')
      }else{
        localStorage.setItem('role', 'partner')
      }

      console.log(localStorage.getItem('email'))
      console.log(localStorage.getItem('password'))

      dispatch({
        type: "LOGIN_SUCCESS",
      })

      // console.log(dispatch)
      // console.log(state.isLogin)

      dispatchModal({
        type: 'CLOSE_MODAL_LOGIN'
      })

      if(from){
        history.push(`/partner/${from}`)
      }
    }else{

    }
  }

  return (
    <>
      <Modal show={modal.login} onHide={() => dispatchModal({type: 'CLOSE_MODAL_LOGIN'})} centered dialogClassName="login-modalw">
        <div>
            <h3 className="mb-5">Login</h3>
            
            <form onSubmit={handleLogin}>
              <input type="text" name="email" placeholder="Email" className="p-2 w-100 mb-4" value={data.email} onChange={handleChange} />

              <input type="password" name="password" placeholder="password" className="p-2 w-100 mb-5" value={data.password} onChange={handleChange} />

              <Button className="w-100" onClick={handleLogin}>Login</Button>
              <div className="text-center mt-3">
                <Link to="">Don't have an account ? Click <b>Here</b></Link>
              </div>
            </form>

        </div>
      </Modal>
    </>
  );
}