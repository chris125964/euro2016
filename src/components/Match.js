import React from 'react';
import { Col, Image, Input, Row } from 'react-bootstrap';

class Match extends React.Component {

/*
  propTypes: {
    nr: React.PropTypes.number,
    team1: React.PropTypes.string.isRequired,
    team2: React.PropTypes.string.isRequired
  }
  */

  render() {
    let pic1= this.props.team1 + ".gif";
    return(
      <div>
      <Row>
        <Col md={1}>
          {this.props.nr}
        </Col>
        <Col md={2}>
      <Input type="text" value={this.props.team1}/>
      </Col>
      {/*
      <Col md={2}>
      <Image src={pic1} thumbnail/>
      </Col>
      */}
      <Col md={2}>
      <Input type="text" value={this.props.team2}/>
      </Col>
      </Row>
      </div>
    );
  }
}

export default Match;
