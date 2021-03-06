import React from 'react';
import { Col, Image, Input, Row } from 'react-bootstrap';
//import Albanien from '../pics/Albanien.gif';

class Match extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleChange1() {
    let value = this.refs.input1.getValue();
    this.setState({
      value1: value
    });
    this.props.onChange(this.props.group, this.props.nr, this.props.team1, value, this.props.team2, this.state.value2);
  }
  handleChange2() {
    let value = this.refs.input2.getValue();
    this.setState({
      value2: value
    });
    this.props.onChange(this.props.group, this.props.nr, this.props.team1, this.state.value1, this.props.team2, value);
  }

  render() {
    let pic1 = <Image src={"./pics/" + this.props.team1 + ".gif"} responsive />;
    return (
      <Row>
          <Col md={1}>
            {this.props.nr}
          </Col>
          <Col md={1}>
            <Image src={"./pics/" + this.props.team1 + ".gif"} circle responsive />
          </Col>
          <Col md={3}>
            <Input type="text" bsSize="small" value={this.props.team1} disabled/>
          </Col>
          <Col md={1}>
            <Input type="text" value={this.state.value1} ref="input1" onChange={this.handleChange1.bind(this)} />
          </Col>
          <Col md={1}>-</Col>
          <Col md={1}>
            <Input type="text" value={this.state.value2} ref="input2" onChange={this.handleChange2.bind(this)}/>
          </Col>
          <Col md={3}>
            <Input type="text" bsSize="small" value={this.props.team2} disabled />
          </Col>
          <Col md={1}>
          <Image src={"./pics/" + this.props.team2 + ".gif"} responsive />
          </Col>
        </Row>
      );
  }
}

export default Match;
