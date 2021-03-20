import React, {useContext} from 'react'

import {LoginContext} from '../contexts/loginContext'

import {UserContext} from '../contexts/userContext'

export default function Profile() {

  const [logins, dispatchLogin] = useContext(LoginContext)
  const [users, dispatchUsers] = useContext(UserContext)

  console.log(logins)

  const findUserById = users.users.find(user => user.id == logins.userId)

  console.log(findUserById)

  const {role} = logins

  return (
    <div className="w-75 mx-auto">

      <div className="row">
        <div className="col-sm-7">
          <h3>{role == 'user'? 'My Profile' : 'Profile Partner'}</h3>
          <div className="row">
            <div className="col-sm-3">Pic Profile Here</div>
            <div classname="col-sm-9">
              <div>
                <div>{role == 'user'? 'Full Name' : 'Name Partner'}</div>
                <div>{findUserById? findUserById.fullname : '-'}</div>
              </div>

              <div>
                <div>Email</div>
                <div>{findUserById? findUserById.email : '-'}</div>
              </div>

              <div>
                <div>Phone</div>
                <div>{findUserById? findUserById.phone : '-'}</div>
              </div>
            </div>
          </div>
         </div>

         <div className="col-sm-5">
          <h3>{role == 'user'? 'History Transaction' : 'History Order'}</h3>
         </div>

         <div className="col-sm-7">
           <button className="btn btn-dark">Edit Profile</button>
          </div>
      </div>

    </div>
  )
}
