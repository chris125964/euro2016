import React from 'react';
import { Col, Image, Input, Row } from 'react-bootstrap';
import Match from '../components/Match';

import _ from 'underscore';

class Matches extends React.Component {

  /*
    propTypes: {
      teams: React.PropTypes.arrayOf(React.PropTypes.string)
    }*/

    onChange(group, nr, team1, value1, team2, value2) {
      this.props.onChange(group, nr, team1, value1, team2, value2);
    }

  	render() {
    	let rows = [];
    	let nr = 0;

    /* Runde 1 */
    	rows.push(<Match group={this.props.group} team1={this.props.teams[0]} team2={this.props.teams[1]} onChange={this.onChange.bind(this)} nr={nr} key={nr}/>);
    	nr = nr + 1;
    	rows.push(<Match group={this.props.group} team1={this.props.teams[2]} team2={this.props.teams[3]} onChange={this.onChange}  nr={nr} key={nr}/>);
    	nr = nr + 1;
    /* Runde 2 */
    	rows.push(<Match group={this.props.group} team1={this.props.teams[1]} team2={this.props.teams[3]} onChange={this.onChange}  nr={nr} key={nr}/>);
    	nr = nr + 1;
    	rows.push(<Match group={this.props.group} team1={this.props.teams[0]} team2={this.props.teams[2]} onChange={this.onChange}  nr={nr} key={nr}/>);
    	nr = nr + 1;
    /* Runde 3 */
    	rows.push(<Match group={this.props.group} team1={this.props.teams[3]} team2={this.props.teams[0]} onChange={this.onChange}  nr={nr} key={nr}/>);
    	nr = nr + 1;
    	rows.push(<Match group={this.props.group} team1={this.props.teams[1]} team2={this.props.teams[2]} onChange={this.onChange}  nr={nr} key={nr}/>);
    	nr = nr + 1;

    	return (
      <div>
        <h1>{rows}</h1>
      </div>
      );
  }
}

export default Matches;
