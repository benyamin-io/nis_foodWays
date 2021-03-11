import {Modal, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Register({showModal, handleCloseModal}){
  return(
    <Modal show={showModal} onHide={() => handleCloseModal('register')} centered dialogClassName="register-modalw">
      <div>
        <h3 className="mb-5">Register</h3>
        <input type="text" name="email" placeholder="Email" className="p-2 w-100 mb-4"/>
        <input type="password" name="password" placeholder="Password" className="p-2 w-100 mb-4"/>
        <input type="text" name="fullname" placeholder="Full Name" className="p-2 w-100 mb-4"/>
        <input type="text" name="gender" placeholder="Gender" className="p-2 w-100 mb-4"/>
        <input type="text" name="phone" placeholder="Phone" className="p-2 w-100 mb-4"/>
        <select className="w-100 p-2">
          <option>As User</option>
          <option value="user">Customer</option>
          <option value="partner">Restaurant</option>
        </select>

        <Button className="w-100 mt-5 py-2">Register</Button>

        <div className="text-center mt-3">
          <Link to="">Already have an account ? Click here</Link>
        </div>
      </div>
    </Modal>
  )
}