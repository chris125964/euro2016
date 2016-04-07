import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import constants from '../constants';
import { Col, Panel, Row, Table, Tabs, Tab } from 'react-bootstrap';


class List extends React.Component {


  render() {
    return (
      <div>
        <ul>
          <li><Link to="/groups">Gruppen</Link></li>
          <li><Link to="/user">Teilnehmer</Link></li>
          <li><Link to="/tables">Tabellen</Link></li>
        </ul>
       </div>
      );
  }
}
export default List;
