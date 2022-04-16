import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      validInfos: true,
      showLogin: true,
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.verifyInfos = this.verifyInfos.bind(this);
  }

  onChange(event) {
    const { target } = event
    this.setState({
      [target.name]: target.value,
    }, () => {
      this.verifyInfos();
    })
  }

  verifyInfos() {
    const pattern = /[a-z0-9]@trybe.com/;
    const { password, email } = this.state
    const habilita = false
    const desabilita = true
    this.setState({
      validInfos: pattern.test(email) && password.length >= 8 ? habilita : desabilita,
    })
  }

  onClick() {
    this.setState({ showLogin: false })
  }

  render() {
    const { email, password, validInfos, showLogin } = this.state
    return (
      <>
        {showLogin ? <Login
          onChange={this.onChange}
          email={email}
          password={password}
          onClick={this.onClick}
          validInfos={validInfos}
          /> : <h1>Bem-vindo {email.split('@')[0]}</h1>}
          {/* <Login
          password={ password }
            validInfos={ validInfos }
            onChange={ this.onChange }
            onClick={ this.onClick }
            email={ email }
          />
          <h1>Bem-vindo { email.split('@')[0] }</h1> */}
      </>
    )
  }
}

export default App;
