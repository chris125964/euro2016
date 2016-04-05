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

    onChangeMatch(group, nr, team1, value1, team2, value2) {
      console.log('onChangeMatch: ' + this.state.groups[group].nummer + '.' + nr + ') ' + team1 + ' - ' + team2 + ': ' + value1 + ' - ' + value2);
    //  console.log('onChangeMatch # team1: ' + team1 + ' -> ' + JSON.stringify(this.state.groups[0]., null, 4));
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
            { _.map(constants.groups, (group, index) =>
                <Tab eventKey={index} title={'Gruppe ' + group.nummer} key={index}>
                  <Col md={6}>
                  <Matches group={index} teams={this.state.groups[index].teams} onChange={this.onChangeMatch.bind(this)}/>
                  </Col>
                  <Col md={6}>
                    <MatchTabelle teams={this.state.groups[index].teams} />
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
