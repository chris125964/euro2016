import React from 'react';
import { Button, Input } from 'react-bootstrap';

class Login extends React.Component {

  onClick() {
    console.log('Logon');
  }

  render() {
    return (
      <div>
        <Input type="text">Account</Input>
        <Input type="text" bsSize="large" disabled />
        <Button onClick={this.onClick}>Login</Button>
        <Button href="#/groups">HREF</Button>
      </div>
      );
  }
}
export default Login;
