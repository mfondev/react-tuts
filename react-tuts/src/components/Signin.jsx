import React from 'react';

const Signin = () => {
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Signin to your Account</h1>
        <input type='email' id='email' placeholder='@email' required />
        <button>Sign in</button>
        <input type='password' id='password' placeholder='password' required />
      </form>
    </div>
  )
}

export default Signin;
