import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

class List extends React.Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/groups">Gruppen</Link></li>
          <li><Link to="/user">Teilnehmer</Link></li>
        </ul>
       </div>
    );
  }
}
export default List;
