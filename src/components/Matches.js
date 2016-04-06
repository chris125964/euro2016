import React from 'react';
import { Col, Image, Input, Row } from 'react-bootstrap';
import Match from '../components/Match';

import _ from 'underscore';

class Matches extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange(group, nr, team1, value1, team2, value2) {
    this.props.onChange(group, nr, team1, value1, team2, value2);
  }

  render() {
    let rows = [];
    let nr = 0;

    /* Runde 1 */
    rows.push(<Match group={this.props.group} team1={this.props.teams[0].name} team2={this.props.teams[1].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;
    rows.push(<Match group={this.props.group} team1={this.props.teams[2].name} team2={this.props.teams[3].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;
    /* Runde 2 */
    rows.push(<Match group={this.props.group} team1={this.props.teams[1].name} team2={this.props.teams[3].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;
    rows.push(<Match group={this.props.group} team1={this.props.teams[0].name} team2={this.props.teams[2].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;
    /* Runde 3 */
    rows.push(<Match group={this.props.group} team1={this.props.teams[3].name} team2={this.props.teams[0].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;
    rows.push(<Match group={this.props.group} team1={this.props.teams[1].name} team2={this.props.teams[2].name} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    nr = nr + 1;

    return (
      <div>
      <h1>{rows}</h1>
    </div>
      );
  }
}

export default Matches;
