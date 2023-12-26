import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const LoginScreen = ({history}) => {
  const handleLogin = () => {
    history.replace('/');
  }

  return (
    <div className='container mt-5'>

<h1>login</h1>
<hr />

<button
 className='btn btn-primary'
 onClick={ handleLogin}
>
Ingresar
</button>

    </div>
  )
}
