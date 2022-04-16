import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    const { onChange, onClick, validInfos } = this.props;
    return (
      <div className='form-content'>
        <h1><span>Tryber</span> Login</h1>
        <form>
          <input
            type='text'
            onChange={ onChange }
            placeholder='Email'
            autoComplete='off'
            name='email'
          />
          <input
            type='password'
            onChange={ onChange }
            placeholder='Senha'
            name='password'
          />
          <button
            type='button'
            onClick={ onClick }
            disabled={ validInfos }
          >
            Entrar
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
