import React from 'react';
import { Col, Image, Input, Row } from 'react-bootstrap';
import Match from '../components/Match';

import _ from 'underscore';

class Matches extends React.Component {

/*
  propTypes: {
    teams: React.PropTypes.arrayOf(React.PropTypes.string)
  }*/


  render() {
    let rows = [];
    let nr = 0;
    for( var i=0; i< this.props.teams.length; i++) {
      for ( var j=i+1; j< this.props.teams.length; j++) {
        nr = nr + 1;
        //rows.push(this.props.teams[i] + " - " + this.props.teams[j]);
        rows.push(<Match team1={this.props.teams[i]} team2={this.props.teams[j]} nr={nr}/>);
      }
    }
    return(
      <div>
        <h1>{rows}</h1>
      </div>
    );
  }
}

export default Matches;
