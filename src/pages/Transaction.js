import React, {useContext} from 'react'

import {LoginContext} from '../contexts/loginContext'

export default function Transaction() {

  const [logins, dispatchLogin] = useContext(LoginContext)

  console.log(logins.isLogin)

  return (
    <div>
      <h3>Income Transaction here</h3>
    </div>
  )
}

