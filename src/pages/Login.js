import React from 'react';
import Link from 'react-router';
import { Button, Col, Row, Input } from 'react-bootstrap';

export default React.createClass ({

  contextTypes: {
      router: React.PropTypes.object
  },

  getInitialState() {
    return({
      account: "chris",
      password: ''
    });
  },

  onClick() {
    console.log('Login mit Account <' + this.state.account + '> <' + this.state.password + '>');
    const path='/tables';
    this.context.router.push(path);
  },

  handleAccount() {
    this.setState({
      account: this.refs.account.getValue()
    });
  },

  handlePassword() {
    this.setState({
      password: this.refs.password.getValue()
    });
  },

  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <Input type="text" value={this.state.account} label="Account" ref="account" onChange={this.handleAccount}/>
          </Col>
          <Col md={3}>
            <Input type="password" value={this.state.password} label="Passwort" ref="password" onChange={this.handlePassword}/>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
        <Button onClick={this.onClick}>Login</Button>
      </div>
      );
  }
})
