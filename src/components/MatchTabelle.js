import React from 'react';
import { Table } from 'react-bootstrap';
import Match from '../components/Match';

import _ from 'underscore';

class MatchTabelle extends React.Component {

  	render() {
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
          { _.map(this.props.teams, (team, index) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{team}</td>
              <td>punkte</td>
              <td>tore</td>
            </tr>
      ) }
        </tbody>
      </Table>
      </div>
      );
  }
}

export default MatchTabelle;
