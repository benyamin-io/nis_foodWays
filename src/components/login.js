import React, {useState} from 'react'
import {Modal, show, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Login({handleCloseModal, showModal, logged}) {
  
  const [data, setData] = useState({email: '', password: ''})

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleLogin = e => {
    e.preventDefault()
    if(typeof(localStorage) !== 'undefined'){
      localStorage.setItem("email", data.email)
      localStorage.setItem("password", data.password)

      console.log(localStorage.getItem('email'))
      console.log(localStorage.getItem('password'))

      logged()
      handleCloseModal('login')
    }else{

    }
  }

  return (
    <>
      <Modal show={showModal} onHide={() => handleCloseModal('login')} centered dialogClassName="login-modalw">
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