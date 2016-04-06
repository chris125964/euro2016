import React from 'react';
import { Table } from 'react-bootstrap';
import Match from '../components/Match';

import _ from 'underscore';

class MatchTabelle extends React.Component {

  	render() {
      let sortedGroup = _.sortBy(this.props.teams, (team) => {return -(team.punkte*100) - (team.torePlus-team.toreMinus)});
    	return (
      <div>
      <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Punkte</th>
            <th>Tore</th>
          </tr>
        </thead>
        <tbody>
          { _.map(sortedGroup, (team, index) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.punkte}</td>
              <td>{team.torePlus}:{team.toreMinus}</td>
            </tr>
      ) }
        </tbody>
      </Table>
      </div>
      );
  }
}

export default MatchTabelle;
