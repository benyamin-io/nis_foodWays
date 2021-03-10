import React, {useState} from 'react'
import {Modal, show, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Login({handleCloseModal, showModal}) {
  
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="modalw" style={{padding: "41px 33px 0 33px"}}>
        <div>
            <h3 className="mb-5">Login</h3>
            <input type="text" name="email" placeholder="Email" className="p-2 w-100 mb-4" />
            <input type="password" name="password" placeholder="password" className="p-2 w-100 mb-5" />

            <Button className="w-100">Login</Button>
            <div className="text-center mt-3">
              <Link to="">Don't have an account ? Click <b>Here</b></Link>
            </div>
        </div>
      </Modal>
    </>
  );
}