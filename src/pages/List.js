import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import Match from '../components/Match';
import Matches from '../components/Matches';
import MatchTabelle from '../components/MatchTabelle';
import constants from '../constants';
import { Col, Panel, Row, Table, Tabs, Tab } from 'react-bootstrap';


class List extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        groups: _.extend({}, constants.groups)
      };
    }

  	render() {
    	return (
      <div>
        <ul>
          <li><Link to="/groups">Gruppen</Link></li>
          <li><Link to="/user">Teilnehmer</Link></li>
        </ul>
        <Row>
          <Tabs defaultActiveKey={1}>
            { _.map(constants.groups, (group, index) => <Tab eventKey={index} title={'Gruppe ' + constants.groups[index].nummer}>
              <Col md={6}>
              <Matches teams={constants.groups[index].teams} />
              </Col>
              <Col md={6}>
                <MatchTabelle teams={constants.groups[index].teams} />
              </Col>
              </Tab>
      )
      }
          </Tabs>
        </Row>
       </div>
      );
  }
}
export default List;
